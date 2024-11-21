import React from 'react';

interface XMLPreviewProps {
  xml: string;
}

export function XMLPreview({ xml }: XMLPreviewProps) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-2">Generated XML</h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{xml}</code>
      </pre>
    </div>
  );
}