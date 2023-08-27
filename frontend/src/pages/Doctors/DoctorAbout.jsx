import { formulateDate } from "../../utils/FormulateDate";
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-">
            Dr. Saleh Mahmud
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quidem repudiandae a porro aperiam culpa. Modi vitae impedit dolores
          debitis porro possimus corporis placeat quam natus repellendus, dicta
          expedita corrupti dolorem ipsa pariatur voluptas ullam consectetur
          ducimus fuga sunt vel.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formulateDate("09-13-2014")} - {formulateDate("09-13-2016")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Neurologist
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formulateDate("07-04-2010")} - {formulateDate("09-13-2014")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Neurologist
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
