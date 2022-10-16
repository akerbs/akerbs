
interface SocialMediaItemProps {
  children: React.ReactNode,
  url: string
}

export function SocialMediaItem({children, url }: SocialMediaItemProps) {
  return (
    <>
          <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
    </>
  )
};
