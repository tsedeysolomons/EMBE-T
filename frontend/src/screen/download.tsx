"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";//library for implementing file drag-and-drop functionality in React applications.
import { FileUp, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FileWithPreview extends File {
  preview?: string;
}

export default function DownloadTicket() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "application/rtf": [".rtf"],
      "application/vnd.ms-powerpoint": [".ppt"],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [".pptx"],
      "image/jpeg": [".jpg", ".jpeg", ".jfif"],
      "image/png": [".png"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "text/plain": [".txt"],
    },
    maxSize: 104857600, // 100MB for PDFs
    multiple: false,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-6xl mx-auto p-6">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">DocHub</h1>
          <nav className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>/</li>
              <li>
                <a
                  href="/functionality"
                  className="hover:text-primary transition-colors"
                >
                  Functionality
                </a>
              </li>
              <li>/</li>
              <li>
                <a
                  href="/documents-by-type"
                  className="hover:text-primary transition-colors"
                >
                  Documents by Type
                </a>
              </li>
              <li>/</li>
              <li>
                <a
                  href="/link-header"
                  className="hover:text-primary transition-colors"
                >
                  Link header in your document
                </a>
              </li>
              <li>/</li>
              <li className="text-muted-foreground">
                Link header in the Rail Ticket Booking
              </li>
            </ol>
          </nav>
        </header>

        <main className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Link header in the Rail Ticket Booking effortlessly
          </h2>

          <div
            {...getRootProps()}
            className={cn(
              "border-2 border-dashed rounded-xl p-12 transition-all duration-300 ease-in-out cursor-pointer",
              "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl",
              "hover:border-primary/50 hover:bg-primary/5",
              isDragActive
                ? "border-primary bg-primary/10"
                : "border-muted-foreground/25"
            )}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Upload className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Drag and drop document here to upload
              </h3>
              <Button variant="outline" size="lg" className="mt-2">
                Select a document
              </Button>
              <p className="text-sm text-muted-foreground mt-2 max-w-md">
                Up to 100 MB for PDF and up to 25 MB for DOC, DOCX, RTF, PPT,
                PPTX, JPEG, PNG, JFIF, XLS, XLSX or TXT
              </p>
            </div>
          </div>

          {files.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h4 className="font-medium mb-4 text-lg">Selected file:</h4>
              <ul className="space-y-2">
                {files.map((file) => (
                  <li
                    key={file.name}
                    className="flex items-center gap-4 p-3 rounded-md bg-muted"
                  >
                    <FileUp className="h-6 w-6 text-primary" />
                    <span className="flex-grow font-medium">{file.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
