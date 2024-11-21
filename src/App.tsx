import React, { useState } from 'react';
import { Code2, FileOutput, Plus } from 'lucide-react';
import { AttributeForm } from './components/AttributeForm';
import { XMLPreview } from './components/XMLPreview';

interface Attribute {
  label: string;
  length: string;
  name: string;
  type: string;
}

function App() {
  const [attributeCount, setAttributeCount] = useState<string>('');
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  const [generatedXML, setGeneratedXML] = useState<string>('');
  const [showForm, setShowForm] = useState(false);

  const handleGenerateForm = () => {
    const count = parseInt(attributeCount);
    if (isNaN(count) || count <= 0) {
      alert('Please enter a valid number of attributes');
      return;
    }

    const newAttributes = Array(count).fill({
      label: '',
      length: '',
      name: '',
      type: '',
    });

    setAttributes(newAttributes);
    setShowForm(true);
    setGeneratedXML('');
  };

  const handleAttributeChange = (index: number, field: string, value: string) => {
    const newAttributes = [...attributes];
    newAttributes[index] = {
      ...newAttributes[index],
      [field]: value,
    };
    setAttributes(newAttributes);
  };

  const generateXML = () => {
    // Validate all fields are filled
    const isValid = attributes.every(
      (attr) => attr.label && attr.length && attr.name && attr.type
    );

    if (!isValid) {
      alert('Please fill in all fields for each attribute');
      return;
    }

    const attributesXML = attributes
      .map(
        (attr) =>
          `    <attribute label="${attr.label}" length="${attr.length}" name="${attr.name}" type="${attr.type}" />`
      )
      .join('\n');

    const xml = `<Attributes>\n${attributesXML}\n</Attributes>`;
    setGeneratedXML(xml);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="flex items-center space-x-3 mb-8">
          <Code2 className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">
            XML Attribute Generator
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Attributes
              </label>
              <input
                type="number"
                value={attributeCount}
                onChange={(e) => setAttributeCount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter number of attributes"
                min="1"
              />
            </div>
            <button
              onClick={handleGenerateForm}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Generate Form</span>
            </button>
          </div>
        </div>

        {showForm && (
          <div className="space-y-6">
            <div className="space-y-4">
              {attributes.map((attr, index) => (
                <AttributeForm
                  key={index}
                  index={index}
                  onChange={handleAttributeChange}
                  values={attr}
                />
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={generateXML}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center space-x-2"
              >
                <FileOutput className="w-4 h-4" />
                <span>Generate XML</span>
              </button>
            </div>

            {generatedXML && <XMLPreview xml={generatedXML} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;