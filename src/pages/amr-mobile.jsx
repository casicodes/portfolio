import PageTitle from "../PageTitle";
import p1 from "../assets/amr-mobile.avif";

function AmrMobile() {
  return (
    <div className="flex flex-col gap-20 text-left">
      <PageTitle />
      <div className="flex flex-col gap-4 text-left">
        <div className="flex flex-col justify-center rounded-sm md:-mx-28 gap-2">
          <img src={p1} alt="" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-lg font-medium">
            Making mobile commerce better for beauty enthusiasts
          </p>
          <p className="font-light">
            AMR Hair & Beauty offers a diverse range of salon essentials to a
            wide customer base, serving both individual consumers (B2C) and
            businesses (B2B).
          </p>
          <p className="font-light">
            I led the design of AMR Hair & Beauty’s e-commerce mobile app from
            researching, validating hypotheses, to designing and handing off for
            implementation. The design of the AMR mobile app on iOS and android
            has had a positive impact on both users and business end resulting
            in :
          </p>
        </div>
      </div>
    </div>
  );
}

export default AmrMobile;
