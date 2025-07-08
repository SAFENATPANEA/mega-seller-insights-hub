import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url: string;
  description: string;
}

const SocialShare = ({ title, url, description }: SocialShareProps) => {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  const handleShare = (platform: keyof typeof shareUrls) => {
    const shareUrl = shareUrls[platform];
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
      console.log('Link copied to clipboard');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="flex items-center space-x-4 py-6 border-t border-gray-200">
      <div className="flex items-center space-x-2">
        <Share2 size={18} style={{ color: 'var(--md-sys-color-outline)' }} />
        <span className="text-sm font-medium" style={{ color: 'var(--md-sys-color-on-surface)' }}>
          Compartir:
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleShare('facebook')}
          className="p-2 corner-small hover:bg-gray-100 transition-colors duration-200"
          aria-label="Compartir en Facebook"
        >
          <Facebook size={18} style={{ color: '#1877f2' }} />
        </button>

        <button
          onClick={() => handleShare('twitter')}
          className="p-2 corner-small hover:bg-gray-100 transition-colors duration-200"
          aria-label="Compartir en Twitter"
        >
          <Twitter size={18} style={{ color: '#1da1f2' }} />
        </button>

        <button
          onClick={() => handleShare('linkedin')}
          className="p-2 corner-small hover:bg-gray-100 transition-colors duration-200"
          aria-label="Compartir en LinkedIn"
        >
          <Linkedin size={18} style={{ color: '#0077b5' }} />
        </button>

        <button
          onClick={handleCopyLink}
          className="p-2 corner-small hover:bg-gray-100 transition-colors duration-200"
          aria-label="Copiar enlace"
        >
          <LinkIcon size={18} style={{ color: 'var(--md-sys-color-outline)' }} />
        </button>
      </div>
    </div>
  );
};

export default SocialShare; 