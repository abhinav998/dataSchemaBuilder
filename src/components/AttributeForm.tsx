import React from 'react';

interface AttributeFormProps {
  index: number;
  onChange: (index: number, field: string, value: string) => void;
  values: {
    label: string;
    length: string;
    name: string;
    type: string;
  };
}

export function AttributeForm({ index, onChange, values }: AttributeFormProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-4 border border-gray-100">
      <div className="text-sm font-medium text-gray-500 mb-4">Attribute #{index + 1}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Label
          </label>
          <input
            type="text"
            value={values.label}
            onChange={(e) => onChange(index, 'label', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Department"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Length
          </label>
          <input
            type="number"
            value={values.length}
            onChange={(e) => onChange(index, 'length', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 120"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={values.name}
            onChange={(e) => onChange(index, 'name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., department"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            value={values.type}
            onChange={(e) => onChange(index, 'type', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select type...</option>
            <option value="string">string</option>
            <option value="number">number</option>
            <option value="boolean">boolean</option>
            <option value="date">date</option>
          </select>
        </div>
      </div>
    </div>
  );
}