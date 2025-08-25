import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  onContactClick?: () => void;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  handle,
  status,
  contactText,
  showUserInfo = true,
  enableTilt = true,
  onContactClick,
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // GSAP tilt effect
  useEffect(() => {
    if (!enableTilt || !cardRef.current) return;
    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / rect.height) * 15;
      const rotateY = ((x - rect.width / 2) / rect.width) * 15;

      gsap.to(card, { rotateX: -rotateX, rotateY, transformPerspective: 1000, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5 });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enableTilt]);

  return (
    <div
      ref={cardRef}
      className={`w-full max-w-sm bg-gray-900/70 backdrop-blur-md border border-purple-500/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center transition-transform duration-500 hover:scale-105 ${className}`}
    >
      {/* Avatar */}
      <div className="w-full h-80 relative">
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full object-cover rounded-t-3xl"
        />
      </div>

      {/* User Info */}
      {showUserInfo && (
        <div className="w-full px-6 py-4 text-center flex flex-col items-center gap-1">
          <h3 className="text-2xl font-semibold text-white">{name}</h3>
          <p className="text-md text-purple-400 mt-1">{title}</p>
          {handle && <p className="text-sm text-gray-400 mt-1">{handle}</p>}
          {status && <p className="text-sm text-green-400 mt-1">{status}</p>}
        </div>
      )}

      {/* Contact Button */}
      {contactText && onContactClick && (
        <button
          onClick={onContactClick}
          className="mb-6 px-6 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full shadow-lg hover:brightness-110 transition-all duration-300"
        >
          {contactText}
        </button>
      )}
    </div>
  );
};

export default ProfileCard;
