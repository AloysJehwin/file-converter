"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Image,
  Music,
  Video,
  Upload,
  Settings,
  History,
  X,
  Check,
} from "lucide-react";

type FileType = "document" | "image" | "audio" | "video";
type ConversionStatus =
  | "idle"
  | "uploading"
  | "processing"
  | "complete"
  | "error";

interface ConversionHistoryItem {
  id: string;
  originalName: string;
  originalFormat: string;
  convertedFormat: string;
  timestamp: Date;
  downloadUrl: string;
}

export default function FileConverter() {
  const [activeTab, setActiveTab] = useState<FileType>("document");
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState<string>("");
  const [conversionStatus, setConversionStatus] =
    useState<ConversionStatus>("idle");
  const [conversionHistory, setConversionHistory] = useState<
    ConversionHistoryItem[]
  >([]);

  const documentFormats = ["PDF", "DOCX", "TXT", "RTF", "ODT"];
  const imageFormats = ["JPG", "PNG", "GIF", "WEBP", "SVG"];
  const audioFormats = ["MP3", "WAV", "OGG", "FLAC", "AAC"];
  const videoFormats = ["MP4", "AVI", "MOV", "MKV", "WEBM"];

  const getFormatsForType = (type: FileType) => {
    switch (type) {
      case "document":
        return documentFormats;
      case "image":
        return imageFormats;
      case "audio":
        return audioFormats;
      case "video":
        return videoFormats;
      default:
        return [];
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      handleFileSelection(file);
    }
  };

  const handleFileSelection = (file: File) => {
    setSelectedFile(file);

    // Determine file type and set appropriate tab
    if (file.type.includes("image")) {
      setActiveTab("image");
    } else if (file.type.includes("audio")) {
      setActiveTab("audio");
    } else if (file.type.includes("video")) {
      setActiveTab("video");
    } else {
      setActiveTab("document");
    }

    // Reset target format
    setTargetFormat("");
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleConvert = () => {
    if (!selectedFile || !targetFormat) return;

    setConversionStatus("uploading");

    // Simulate conversion process
    setTimeout(() => {
      setConversionStatus("processing");

      setTimeout(() => {
        // Add to conversion history
        const newHistoryItem: ConversionHistoryItem = {
          id: Math.random().toString(36).substring(2, 9),
          originalName: selectedFile.name,
          originalFormat: selectedFile.name.split(".").pop() || "",
          convertedFormat: targetFormat.toLowerCase(),
          timestamp: new Date(),
          downloadUrl: "#", // In a real app, this would be a real URL
        };

        setConversionHistory([newHistoryItem, ...conversionHistory]);
        setConversionStatus("complete");
      }, 2000);
    }, 1500);
  };

  const resetConversion = () => {
    setSelectedFile(null);
    setTargetFormat("");
    setConversionStatus("idle");
  };

  const renderDropzone = () => (
    <div
      className={`p-8 border-2 border-dashed ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"} rounded-lg bg-white flex flex-col items-center justify-center transition-colors`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <Upload className="w-16 h-16 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">
        Drag & Drop Your Files Here
      </h3>
      <p className="text-gray-600 mb-6">or click to browse your files</p>
      <input
        type="file"
        id="file-input"
        className="hidden"
        onChange={handleFileInputChange}
      />
      <label htmlFor="file-input">
        <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
          Select Files
        </Button>
      </label>
    </div>
  );

  const renderFilePreview = () => (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Selected File</h3>
        <Button variant="ghost" size="sm" onClick={resetConversion}>
          <X className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex items-center p-3 bg-gray-50 rounded-md">
        {activeTab === "document" && (
          <FileText className="w-8 h-8 text-blue-500 mr-3" />
        )}
        {activeTab === "image" && (
          <Image className="w-8 h-8 text-blue-500 mr-3" />
        )}
        {activeTab === "audio" && (
          <Music className="w-8 h-8 text-blue-500 mr-3" />
        )}
        {activeTab === "video" && (
          <Video className="w-8 h-8 text-blue-500 mr-3" />
        )}
        <div>
          <p className="font-medium">{selectedFile?.name}</p>
          <p className="text-sm text-gray-500">
            {(selectedFile?.size || 0) / 1024 < 1000
              ? `${((selectedFile?.size || 0) / 1024).toFixed(1)} KB`
              : `${((selectedFile?.size || 0) / (1024 * 1024)).toFixed(1)} MB`}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-medium mb-2">Convert to:</h4>
        <div className="flex flex-wrap gap-2">
          {getFormatsForType(activeTab).map((format) => (
            <Button
              key={format}
              variant={targetFormat === format ? "default" : "outline"}
              size="sm"
              onClick={() => setTargetFormat(format)}
            >
              {format}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Button
          className="w-full"
          disabled={!targetFormat || conversionStatus !== "idle"}
          onClick={handleConvert}
        >
          {conversionStatus === "idle" && "Convert Now"}
          {conversionStatus === "uploading" && "Uploading..."}
          {conversionStatus === "processing" && "Processing..."}
          {conversionStatus === "complete" && "Completed!"}
          {conversionStatus === "error" && "Error!"}
        </Button>
      </div>

      {conversionStatus === "complete" && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center">
          <Check className="w-5 h-5 mr-2" />
          <span>Conversion complete! Check the history tab to download.</span>
        </div>
      )}
    </div>
  );

  const renderHistory = () => (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold mb-4">Conversion History</h3>

      {conversionHistory.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No conversion history yet
        </p>
      ) : (
        <div className="space-y-4">
          {conversionHistory.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
            >
              <div>
                <p className="font-medium">{item.originalName}</p>
                <p className="text-sm text-gray-500">
                  {item.originalFormat.toUpperCase()} →{" "}
                  {item.convertedFormat.toUpperCase()} •
                  {item.timestamp.toLocaleString()}
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={item.downloadUrl} download>
                  Download
                </a>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
      <Tabs defaultValue="converter" className="w-full">
        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="converter" className="flex items-center gap-2">
              <Upload className="w-4 h-4" /> Converter
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="w-4 h-4" /> History
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" /> Settings
            </TabsTrigger>
          </TabsList>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> Documents
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Image className="w-4 h-4" /> Images
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Music className="w-4 h-4" /> Audio
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Video className="w-4 h-4" /> Video
            </Button>
          </div>
        </div>

        <div className="p-6">
          <TabsContent value="converter" className="mt-0">
            {!selectedFile ? renderDropzone() : renderFilePreview()}
          </TabsContent>

          <TabsContent value="history" className="mt-0">
            {renderHistory()}
          </TabsContent>

          <TabsContent value="settings" className="mt-0">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold mb-4">
                Conversion Settings
              </h3>
              <p className="text-gray-500 mb-4">
                Configure your default conversion preferences
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">Default Quality</h4>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Low
                    </Button>
                    <Button variant="default" size="sm">
                      Medium
                    </Button>
                    <Button variant="outline" size="sm">
                      High
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Batch Processing</h4>
                  <div className="flex space-x-2">
                    <Button variant="default" size="sm">
                      Enabled
                    </Button>
                    <Button variant="outline" size="sm">
                      Disabled
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
