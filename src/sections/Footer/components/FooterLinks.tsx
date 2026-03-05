export type FooterLinksProps = {
  title: string;
  variant: string;
  links?: Array<{
    href: string;
    text: string;
    className?: string;
  }>;
  socialLinks?: Array<{
    href: string;
    iconSrc: string;
    alt: string;
  }>;
};

export const FooterLinks = (props: FooterLinksProps) => {
  return (
    <div className="box-border min-h-[auto] min-w-[auto]">
      <h4 className="font-medium box-border mb-4">
        {props.title}
      </h4>
      {props.variant === "navigation" && props.links && (
        <ul className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] box-border list-none pl-0">
          {props.links.map((link, index) => (
            <li
              key={index}
              className={
                link.className ||
                "box-border mb-2"
              }
            >
              <a
                href={link.href}
                className="box-border transition-colors duration-200 hover:text-white"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
      {props.variant === "social" && props.socialLinks && (
        <div className="box-border gap-x-4 flex gap-y-4">
          {props.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.7)] box-border block min-h-[auto] min-w-[auto] transition-all duration-200 hover:opacity-100 hover:scale-110"
            >
              <img
                src={link.iconSrc}
                alt={link.alt}
                className="box-border h-5 w-5"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
