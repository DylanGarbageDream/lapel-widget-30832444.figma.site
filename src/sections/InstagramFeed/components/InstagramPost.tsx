export type InstagramPostProps = {
  profileIconUrl: string;
  username: string;
  postImageUrl: string;
  postImageAlt: string;
  likeIconUrl: string;
  commentIconUrl: string;
  shareIconUrl: string;
  saveIconUrl: string;
  likesCount: string;
  caption: string;
};

export const InstagramPost = (props: InstagramPostProps) => {
  return (
    <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] mb-4">
      <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.708_0_0_/_0.5)] px-4 py-2">
        <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] gap-y-2">
          <div className="bg-[linear-gradient(to_right_top,oklch(0.75_0.183_55.934)_0%,oklch(0.637_0.237_25.331)_50%,oklch(0.278_0.033_256.848)_100%)] box-border caret-transparent h-8 min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] w-8 p-0.5 rounded-[3.35544e+07px]">
            <div className="box-border caret-transparent h-full outline-[oklab(0.708_0_0_/_0.5)] w-full overflow-hidden rounded-[3.35544e+07px]">
              <img
                src={props.profileIconUrl}
                alt="Icon"
                className="box-border caret-transparent h-full outline-[oklab(0.708_0_0_/_0.5)] w-full"
              />
            </div>
          </div>
          <span className="text-sm font-semibold box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)]">
            {props.username}
          </span>
        </div>
      </div>
      <div className="aspect-square bg-[oklch(0.967_0.003_264.542)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] w-full overflow-hidden">
        <img
          src={props.postImageUrl}
          alt={props.postImageAlt}
          className="box-border caret-transparent object-contain outline-[oklab(0.708_0_0_/_0.5)] w-full h-full"
        />
      </div>
      <div className="box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] px-4 py-2">
        <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.708_0_0_/_0.5)] mb-2">
          <div className="items-center box-border caret-transparent gap-x-4 flex min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] gap-y-4">
            <img
              src={props.likeIconUrl}
              alt="Icon"
              className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
            />
            <img
              src={props.commentIconUrl}
              alt="Icon"
              className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
            />
            <img
              src={props.shareIconUrl}
              alt="Icon"
              className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
            />
          </div>
          <img
            src={props.saveIconUrl}
            alt="Icon"
            className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
          />
        </div>
        <div className="text-sm font-semibold box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)] mb-1">
          {props.likesCount} likes
        </div>
        <div className="text-sm box-border caret-transparent leading-5 outline-[oklab(0.708_0_0_/_0.5)]">
          <span className="font-semibold box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)]">
            {props.username}
          </span>{' '}
          {props.caption}
        </div>
      </div>
    </div>
  );
};
