'use client';

import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db'; // Make sure this path is correct
import { AIOutput } from '@/utils/Schema'; // Make sure this path is correct
import { Button } from '@/components/ui/button';

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;  // Allow aiResponse to be null
  createdBy: string;
  createdAt: string | null;
  templateSlug: string;
}

const HistoryPage: React.FC = () => {
  const [historyData, setHistoryData] = useState<HISTORY[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const result = await db.select().from(AIOutput).execute();
        setHistoryData(result as HISTORY[]);
      } catch (error) {
        console.error('Failed to fetch history:', error);
      }
    };
    fetchHistory();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const formatAiResponse = (response: string | null) => {
    if (!response) return '';  // Handle null case
    const words = response.split(' ');
    if (words.length <= 2) return response;
    return `${words.slice(0, 2).join(' ')} <span class="blur-sm">${words.slice(2, 5).join(' ')}</span>`;
  };

  return (
    <div className='ml-3'>
      <div className='mb-5'>
        <h2 className='text-3xl font-bold'>History</h2>
        <p className='text-gray-500'>Search your previous history</p>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border'>
          <thead>
            <tr>
              <th className='px-4 py-2 border'>Template</th>
              <th className='px-4 py-2 border'>AiResp</th>
              <th className='px-4 py-2 border'>Date</th>
              <th className='px-4 py-2 border'>Words</th>
              <th className='px-4 py-2 border'>Copy</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((entry, index) => (
              <tr key={index} className='odd:bg-gray-100 even:bg-white'>
                <td className='px-4 py-2 border'>{entry.templateSlug}</td>
                <td className='px-4 py-2 border' dangerouslySetInnerHTML={{ __html: formatAiResponse(entry.aiResponse) }}></td>
                <td className='px-4 py-2 border'>{entry.createdAt}</td>
                <td className='px-4 py-2 border'>{entry.formData.split(' ').length}</td>
                <td className='px-4 py-2 border'>
                  <Button
                    onClick={() => copyToClipboard(entry.aiResponse || '')}
                    className='bg-[#414A59] px-2 py-1 border rounded text-white hover:bg-[#131B2A]'
                  >
                    Copy
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage
