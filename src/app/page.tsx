import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  FileText,
  Image,
  Music,
  Video,
  History,
  Settings,
  Upload,
  CheckCircle2,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

        <div className="relative pt-24 pb-20 sm:pt-32 sm:pb-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                Convert{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Any File
                </span>{" "}
                With Ease
              </h1>

              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Simple, fast file conversion between multiple formats. No
                complicated settings, no software to install.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={user ? "/dashboard" : "/sign-up"}
                  className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
                >
                  Start Converting Now
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dropzone Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg bg-white m-6 flex flex-col items-center justify-center">
              <Upload className="w-16 h-16 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Drag & Drop Your Files Here
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                or click to browse your files
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Select Files
              </Button>
            </div>
            <div className="bg-gray-100 p-6 flex justify-between items-center">
              <div className="flex space-x-4">
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
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <History className="w-4 h-4" /> History
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" /> Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple File Conversion</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform makes converting files between formats quick and easy
              with these powerful features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Upload className="w-6 h-6" />,
                title: "Drag & Drop Interface",
                description: "Simply drag your files into the conversion area",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Multiple Format Support",
                description:
                  "Convert between documents, images, audio, and video formats",
              },
              {
                icon: <History className="w-6 h-6" />,
                title: "Conversion History",
                description: "Access your previously converted files anytime",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Batch Processing",
                description: "Convert multiple files at once to save time",
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: "Customizable Options",
                description: "Fine-tune your conversion settings when needed",
              },
              {
                icon: <ArrowUpRight className="w-6 h-6" />,
                title: "Instant Downloads",
                description: "Get your converted files immediately",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format Support Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Supported Formats</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Convert between a wide range of file formats with just a few
              clicks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-xl">
              <FileText className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Documents</h3>
              <ul className="text-gray-600 space-y-2">
                <li>PDF</li>
                <li>DOCX</li>
                <li>TXT</li>
                <li>RTF</li>
                <li>ODT</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Image className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Images</h3>
              <ul className="text-gray-600 space-y-2">
                <li>JPG</li>
                <li>PNG</li>
                <li>GIF</li>
                <li>WEBP</li>
                <li>SVG</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Music className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Audio</h3>
              <ul className="text-gray-600 space-y-2">
                <li>MP3</li>
                <li>WAV</li>
                <li>OGG</li>
                <li>FLAC</li>
                <li>AAC</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Video className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Video</h3>
              <ul className="text-gray-600 space-y-2">
                <li>MP4</li>
                <li>AVI</li>
                <li>MOV</li>
                <li>MKV</li>
                <li>WEBM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Convert Your Files?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get started now with our easy-to-use file conversion platform.
          </p>
          <Link
            href={user ? "/dashboard" : "/sign-up"}
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Converting
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
