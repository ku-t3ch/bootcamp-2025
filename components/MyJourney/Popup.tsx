import axiosClient from '@/lib/axios';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string | string[];
  description?: string; 
  buttonText?: string;  
  buttonAction?: (rating?: number, comment?: string) => void;
  color: string;
  username?: string;
  stationId?: string;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  color,
  username,
  stationId
}) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    axiosClient.post('/reviews', {
      username: username ,
      rating: rating,
      comment: comment,
      stationId: stationId
    })
    .then(() => {
      alert('บันทึกสำเร็จ!');
      setDisabled(true);
    })
  };

  if (!isOpen) return null;

  const popupContent = (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg w-[300px] max-h-[90vh] overflow-y-auto p-5 border shadow-lg relative" style={{ borderColor: `#${color}` }}>
        <button 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
          onClick={onClose}
        >
          ✕
        </button>
        <h1 className="font-semibold text-center text-lg ">Journey Recap</h1>
        
        {/* ระบบคะแนนดาว */}
        <div className="flex justify-center items-center my-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="mx-1 focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill={star <= (hoveredRating || rating) ? `#${color}` : "none"}
                stroke={`#${color}`}
                strokeWidth="1.5"
                className="w-8 h-8 transition-all duration-150"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
                />
              </svg>
            </button>
          ))}
        </div>
        
        {/* แสดงคะแนนที่เลือกเป็นข้อความ */}
        <p className="text-center text-sm mb-4">
          {rating > 0 ? `ให้คะแนนฐานนี้ ${rating} ดาว` : "กรุณาเลือกคะแนน"}
        </p>
        
        {/* เพิ่มช่องใส่ความคิดเห็น */}
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
           หลังร่วมกิจกรรมฐานนี้ น้องได้เรียนรู้อะไร และมั่นใจเรื่องอะไรขึ้นบ้าง?
          </label>
          <textarea
            id="comment"
            rows={3}
            className="w-full px-3 py-2 h-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50"
            placeholder="มาสะท้อนตัวตนของตัวเองกัน!"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          
        </div>
        <button 
          className={`w-full py-2 text-white text-sm rounded-md ${rating === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          style={{ backgroundColor: `#${color}` }}
          onClick={handleSubmit}
          disabled={rating === 0 || disabled}>
            บันทึก
        </button>
         <div className='text-sm text-red-500 text-center mt-[10px]'>สามารถส่งได้ครั้งเดียว</div>

      </div>
    </div>
  );

  return typeof document !== 'undefined' 
    ? createPortal(popupContent, document.body) 
    : null;
};

export default Popup;