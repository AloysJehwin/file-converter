# File Converter Web App

A full-stack web application to convert files between various formats. Built with **Next.js + Vite** for the frontend, **Express.js** for the backend, and integrates **AWS S3** and **Supabase** for cloud storage and database services.

## Features

* Upload files of any format
* Convert files to selected output formats
* Download converted files
* Store and manage file metadata with Supabase
* Use AWS S3 for secure and scalable file storage

---

## Tech Stack

* **Frontend**: Next.js, Vite
* **Backend**: Express.js (Node.js)
* **Cloud Storage**: AWS S3
* **Database**: Supabase (PostgreSQL)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AloysJehwin/file-converter.git
cd file-converter
```

### 2. Install dependencies

```bash
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root of both `frontend` and `backend` folders with the following content:

#### `.env.local` for **frontend**

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

#### `.env.local` for **backend**

```
PORT=5000
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
AWS_S3_BUCKET_NAME=your_s3_bucket_name
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

---

### 4. Start the development servers

#### Start backend:

```bash
cd backend
npm run dev
```

#### Start frontend:

```bash
cd frontend
npm run dev
```

---

## Folder Structure

```
file-converter/
├── backend/            # Express backend
│   └── ...
├── frontend/           # Next.js + Vite frontend
│   └── ...
└── README.md
```

---

## Deployment

You can deploy the frontend to **Vercel** and the backend to **Render**, **Railway**, or any Node.js hosting platform. Make sure to configure the environment variables accordingly in production.

---

## License

This project is licensed under the MIT License.
# File Converter Web App

A full-stack web application to convert files between various formats. Built with **Next.js + Vite** for the frontend, **Express.js** for the backend, and integrates **AWS S3** and **Supabase** for cloud storage and database services.

## Features

* Upload files of any format
* Convert files to selected output formats
* Download converted files
* Store and manage file metadata with Supabase
* Use AWS S3 for secure and scalable file storage

---

## Tech Stack

* **Frontend**: Next.js, Vite
* **Backend**: Express.js (Node.js)
* **Cloud Storage**: AWS S3
* **Database**: Supabase (PostgreSQL)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AloysJehwin/file-converter.git
cd file-converter
```

### 2. Install dependencies

```bash
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root of both `frontend` and `backend` folders with the following content:

#### `.env.local` for **frontend**

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

#### `.env.local` for **backend**

```
PORT=5000
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
AWS_S3_BUCKET_NAME=your_s3_bucket_name
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

---

### 4. Start the development servers

#### Start backend:

```bash
cd backend
npm run dev
```

#### Start frontend:

```bash
cd frontend
npm run dev
```

---

## Folder Structure

```
file-converter/
├── backend/            # Express backend
│   └── ...
├── frontend/           # Next.js + Vite frontend
│   └── ...
└── README.md
```

---

## Deployment

You can deploy the frontend to **Vercel** and the backend to **Render**, **Railway**, or any Node.js hosting platform. Make sure to configure the environment variables accordingly in production.

---

## License

This project is licensed under the MIT License.
