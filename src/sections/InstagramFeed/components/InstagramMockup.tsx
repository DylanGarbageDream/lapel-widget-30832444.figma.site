import { InstagramPost } from "@/sections/InstagramFeed/components/InstagramPost";

export const InstagramMockup = () => {
  return (
    <div className="relative bg-black shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border caret-transparent h-[750px] min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] w-screen p-3 rounded-[48px] md:w-[375px]">
      <div className="absolute bg-black box-border caret-transparent h-7 outline-[oklab(0.708_0_0_/_0.5)] w-40 z-10 rounded-b-3xl left-1/2 -translate-x-1/2 top-0"></div>
      <div className="bg-white box-border caret-transparent h-full outline-[oklab(0.708_0_0_/_0.5)] w-full overflow-hidden rounded-[40px]">
        <div className="bg-white box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] px-4 py-3 border-b border-solid border-[oklch(0.928_0.006_264.531)]">
          <div className="items-center box-border caret-transparent flex justify-between outline-[oklab(0.708_0_0_/_0.5)]">
            <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] gap-y-2">
              <div className="bg-[linear-gradient(to_right_top,oklch(0.75_0.183_55.934)_0%,oklch(0.637_0.237_25.331)_50%,oklch(0.278_0.033_256.848)_100%)] box-border caret-transparent h-8 min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)] w-8 p-0.5 rounded-[3.35544e+07px]">
                <div className="box-border caret-transparent h-full outline-[oklab(0.708_0_0_/_0.5)] w-full overflow-hidden rounded-[3.35544e+07px]">
                  <img
                    src="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-15.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-full outline-[oklab(0.708_0_0_/_0.5)] w-full"
                  />
                </div>
              </div>
              <span className="text-sm font-semibold box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)]">
                rawenginemedia
              </span>
            </div>
            <img
              src="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-16.svg"
              alt="Icon"
              className="box-border caret-transparent h-6 outline-[oklab(0.708_0_0_/_0.5)] w-6"
            />
          </div>
        </div>
        <div className="box-border caret-transparent h-[calc(100%_-_56px)] outline-[oklab(0.708_0_0_/_0.5)] overflow-auto">
          <InstagramPost
            profileIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-15.svg"
            username="rawenginemedia"
            postImageUrl="https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772743352001-0.png"
            postImageAlt="Instagram post"
            likeIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-17.svg"
            commentIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-18.svg"
            shareIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-19.svg"
            saveIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-20.svg"
            likesCount="2,847"
            caption="We kill ordinary 🔧"
          />
          <InstagramPost
            profileIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-15.svg"
            username="rawenginemedia"
            postImageUrl="https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772743848860-0.jpeg"
            postImageAlt="Instagram post"
            likeIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-17.svg"
            commentIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-18.svg"
            shareIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-19.svg"
            saveIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-20.svg"
            likesCount="3,192"
            caption="The creative engine that will drive your brand further 🏁"
          />
          <InstagramPost
            profileIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-15.svg"
            username="rawenginemedia"
            postImageUrl="https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772743903478-0.jpeg"
            postImageAlt="Instagram post"
            likeIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-17.svg"
            commentIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-18.svg"
            shareIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-19.svg"
            saveIconUrl="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-20.svg"
            likesCount="4,521"
            caption="Perfection in every detail ✨"
          />
        </div>
      </div>
    </div>
  );
};
