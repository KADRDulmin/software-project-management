---
name: Bug report
about: Create a report to help us improve
title: ''
labels: ''
assignees: ''

---

import React, { useState } from 'react';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertCircle,
  Bug,
  Smartphone,
  Monitor,
  Upload
} from 'lucide-react';

const BugReportForm = () => {
  const [environment, setEnvironment] = useState('web');
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bug className="h-6 w-6 text-red-500" />
          <CardTitle className="text-xl font-semibold">Report a Bug</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          {/* Bug Summary Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Bug Title *</label>
              <input 
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Brief description of the issue"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Priority Level *</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="critical">🔴 Critical</SelectItem>
                  <SelectItem value="high">🟠 High</SelectItem>
                  <SelectItem value="medium">🟡 Medium</SelectItem>
                  <SelectItem value="low">🟢 Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Environment Selection */}
          <div className="space-y-4">
            <label className="block text-sm font-medium">Environment *</label>
            <div className="flex gap-4">
              <button
                type="button"
                className={`flex items-center gap-2 p-3 rounded-lg border ${
                  environment === 'web' ? 'bg-blue-50 border-blue-500' : ''
                }`}
                onClick={() => setEnvironment('web')}
              >
                <Monitor className="h-5 w-5" />
                <span>Web App</span>
              </button>
              <button
                type="button"
                className={`flex items-center gap-2 p-3 rounded-lg border ${
                  environment === 'mobile' ? 'bg-blue-50 border-blue-500' : ''
                }`}
                onClick={() => setEnvironment('mobile')}
              >
                <Smartphone className="h-5 w-5" />
                <span>Mobile App</span>
              </button>
            </div>

            {/* Environment Details */}
            {environment === 'web' ? (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">OS</label>
                  <input 
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., Windows 11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Browser</label>
                  <input 
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., Chrome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Version</label>
                  <input 
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., 120.0.0"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Device</label>
                  <input 
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., iPhone 15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">OS</label>
                  <input 
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., iOS 17"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">App Version</label>
                  <input 
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., 2.1.0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Build</label>
                  <input 
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="e.g., 245"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Bug Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Steps to Reproduce *</label>
              <textarea 
                className="w-full p-2 border rounded-md min-h-[100px]"
                placeholder="1. Go to...&#10;2. Click on...&#10;3. Observe that..."
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Expected Behavior *</label>
              <textarea 
                className="w-full p-2 border rounded-md min-h-[80px]"
                placeholder="Describe what should happen"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Actual Behavior *</label>
              <textarea 
                className="w-full p-2 border rounded-md min-h-[80px]"
                placeholder="Describe what actually happens"
                required
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Screenshots/Videos</label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <div className="flex flex-col items-center">
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Drag and drop files here or click to upload
                  </p>
                  <input type="file" className="hidden" multiple accept="image/*,video/*" />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Additional Context</label>
              <textarea 
                className="w-full p-2 border rounded-md min-h-[80px]"
                placeholder="Any other information that might be helpful (e.g., user account, data, console errors)"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              className="px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit Bug Report
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BugReportForm;
