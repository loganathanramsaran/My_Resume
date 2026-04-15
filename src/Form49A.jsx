// src/pages/Form49A.jsx
import React from "react";
import { SquareCheck, Square, Space } from "lucide-react";

const createBoxes = (count, namePrefix) => {
  return (
    <div className="grid grid-cols-20 border border-gray-400">
      {Array.from({ length: count }).map((_, idx) => (
        <input
          key={idx}
          maxLength={1}
          name={`${namePrefix}_${idx}`}
          className="border-r border-gray-300 h-6 w-full text-center text-[9pt] outline-none focus:bg-yellow-100"
        />
      ))}
    </div>
  );
};
const boxes = Array.from({ length: 25 });
const boxes2 = Array.from({ length: 37 });
const boxes3 = Array.from({ length: 2 });
const boxes4 = Array.from({ length: 4 });
const boxes5 = Array.from({ length: 7 });
const boxes6 = Array.from({ length: 3 });
const boxes7 = Array.from({ length: 13 });
const boxes8 = Array.from({ length: 30 });
const boxes9 = Array.from({ length: 12 });
const boxes10 = Array.from({ length: 28 });

const Form49A = () => {
  return (
    <>
      // Page 1
      <div className="bg-white text-black font-sans text-[10pt]  w-[210mm] mx-auto border border-black m-2 pb-2 ">
        {/* HEADER SECTION */}
        <div className="flex justify-between p-1">
          {/* left photo */}
          <div className="w-[3cm] h-[4cm] border border-gray-500 flex flex-col justify-between text-[7pt] p-1 text-center">
            <p className="pt-5">
              Only ‘Individuals’
              <br />
              to affix recent
              <br />
              photograph
              <br />
              (3.5 cm x 2.5 cm)
            </p>
            <p className="text-[7pt] font-semibold border-t border-gray-400">
              Sign / Left Thumb impression
              <br />
              across this photo
            </p>
          </div>

          {/* Center text */}
          <div className="flex-1 text-center px-3">
            <h1 className="font-bold text-[9pt]">Form No. 49A</h1>
            <p className="font-bold text-[7pt]">
              Application for Allotment of Permanent Account Number
            </p>
            <p className="text-[7pt] font-bold">
              [In the case of Indian Citizens/Indian Companies/Entities
              incorporated in India/
              <br />
              Unincorporated entities formed in India]
            </p>
            <p className="text-[7pt] font-bold">See Rule 114</p>
            <p className="text-[6pt]">
              To avoid mistake(s), please follow the accompanying instructions
              and examples before filling up the form
            </p>

            <div className="mt-1 text-start pl-3 bg-gray-200 font-bold text-[7pt] ">
              Assessing officer (AO code)
            </div>
            <div className="border w-[10cm] mt-1">
              {/* Header Row */}
              <div className="grid grid-cols-4 text-center font-semibold   ">
                <div className="border-r border-black h-[0.5cm] text-[7pt] font-semibold">
                  AO type
                </div>
                <div className="border-r border-black h-[0.5cm] text-[7pt] font-semibold">
                  Area code
                </div>
                <div className="border-r border-black h-[0.5cm] text-[7pt] font-semibold">
                  Range code
                </div>
                <div className="border-r border-black h-[0.5cm] text-[7pt] font-semibold">
                  AO No.
                </div>
              </div>

              {/* Input Row */}
              <div className="grid grid-cols-4 h-[0.6cm] ">
                {/* Area Code → 3 boxes */}
                <div className="grid grid-cols-3 ">
                  {[1, 2, 3].map((i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className=" text-center outline-none"
                    />
                  ))}
                </div>

                {/* AO Type → 2 boxes */}
                <div className="grid grid-cols-2 ">
                  {[1, 2].map((i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="  text-center outline-none"
                    />
                  ))}
                </div>

                {/* Range Code → 3 boxes */}
                <div className="grid grid-cols-3 ">
                  {[1, 2, 3].map((i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className=" text-center outline-none"
                    />
                  ))}
                </div>

                {/* AO No → 2 boxes */}
                <div className="grid grid-cols-2">
                  {[1, 2].map((i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className=" text-center outline-none"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* right photo */}
          <div className="flex flex-col items-end ">
            <div className=" w-[3cm] h-[3.5cm] border text-[8pt] p-1 text-center">
              <p className="pt-5">
                Only ‘Individuals’
                <br />
                to affix recent
                <br />
                photograph
                <br />
                (3.5 cm x 2.5 cm)
              </p>
            </div>

            <div className="flex flex-col justify-end h-[2.5cm] w-[6cm] border ">
              <p className="text-center border-t text-[7pt] font-semibold p-1">
                Signature/left Thumb Impression
              </p>
            </div>
          </div>
        </div>

        <p className="text-[10pt] pl-1">
          Sir, <br />
          I/We hereby request that a permanent account number be allotted to
          me/us.
          <br />
          I/We give below necessary particulars:
        </p>

        {/* ========== SECTION 1 ========== */}
        <div className="mt-2">
          <div className="bg-gray-200 font-bold p-1 text-[8pt]">
            1. Full Name (Full expanded name to be mentioned as appearing in
            proof of identity/date of birth/address documents: initials are not
            permitted)
          </div>
          <div className="flex gap-5 p-1 ml-4">
            {/* titles */}
            <div className="space-y-1 ">
              <p className="flex">
                Please select title,
                <SquareCheck /> as applicable{" "}
              </p>
              <p>Last Name / Surname</p>
              <p>First Name</p>
              <p>Middle Name</p>
            </div>
            {/* boxes */}
            <div className="space-y-1">
              <div className="flex gap-2">
                <p className="flex">
                  <Square /> Shri{" "}
                </p>
                <p className="flex">
                  <Square /> Smt{" "}
                </p>
                <p className="flex">
                  <Square /> Kumari{" "}
                </p>
                <p className="flex">
                  <Square /> M/S{" "}
                </p>
              </div>
              <div className="flex ">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========== SECTION 2 ========== */}
        <div className="border-x border-b border-gray-400">
          <div className="bg-gray-200 font-semibold p-1 text-[10pt]">
            2. Abbreviations of above name to be printed on PAN card
          </div>
          {/* boxes2 */}
          <div className="ml-4 p-1 flex flex-col gap-1">
            <div className="flex">
              {boxes2.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
            <div className="flex">
              {boxes2.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
          </div>
        </div>

        {/* ========== SECTION 3 ========== */}
        <div className="bg-gray-200 font-semibold p-1 text-[10pt] flex justify-between">
          <span>3. Have you ever been known by any other name?</span>
          <div className="flex gap-6">
            <label className="flex items-center gap-1 ">
              <input type="checkbox" /> Yes
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" /> No
            </label>
          </div>
          <span>(please tick as applicable)</span>
        </div>
        <p className="ml-5 text-[9pt]">If yes, please give that other name</p>
        <div className="flex gap-5 p-1 ml-4">
          {/* titles */}
          <div className="space-y-1 ">
            <p className="flex">
              Please select title,
              <SquareCheck /> as applicable{" "}
            </p>
            <p>Last Name / Surname</p>
            <p>First Name</p>
            <p>Middle Name</p>
          </div>
          {/* boxes */}
          <div className="space-y-1">
            <div className="flex gap-2">
              <p className="flex">
                <Square /> Shri{" "}
              </p>
              <p className="flex">
                <Square /> Smt{" "}
              </p>
              <p className="flex">
                <Square /> Kumari{" "}
              </p>
              <p className="flex">
                <Square /> M/S{" "}
              </p>
            </div>
            <div className="flex ">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
            <div className="flex">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
            <div className="flex">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
          </div>
        </div>

        {/* ========== SECTION 4========== */}
        {/* Gender */}
        <div className="bg-gray-200 font-semibold p-1 text-[10pt] flex justify-between mb-1">
          <span>4. Gender (for Individual applicants only)</span>
          <div className="flex gap-6">
            <label className="flex items-center gap-1 ">
              <input type="checkbox" /> Male
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" /> Female
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" /> Transgender
            </label>
          </div>
          <span>(please tick as applicable)</span>
        </div>

        {/* ========== SECTION 5========== */}
        {/* DOB */}
        <div className="bg-gray-200 font-semibold p-1 text-[10pt]">
          5. Date of Birth/Incorporation/Agreement/Partnership/Trust Formation
        </div>
        <div className="flex gap-5 text-center text-[9pt] p-1 ml-4">
          <span>
            <p>Day</p>
            {boxes3.map((_, i) => (
              <input
                key={i}
                maxLength={1}
                className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
              />
            ))}
          </span>
          <span>
            <p>Month</p>
            {boxes3.map((_, i) => (
              <input
                key={i}
                maxLength={1}
                className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
              />
            ))}
          </span>
          <span>
            <p>Year</p>
            {boxes4.map((_, i) => (
              <input
                key={i}
                maxLength={1}
                className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
              />
            ))}
          </span>
        </div>

        {/* ========== SECTION 6========== */}
        {/* Parent Details */}
        <div className="bg-gray-200 font-semibold p-1 text-[10pt]">
          6. Details of Parents (applicable only for individual applicants)
        </div>
        <div className="p-1 ml-4">
          {/* Fathers Name */}
          <p>
            Whether mother is a single parent and you wish to apply for PAN by
            furnishing mother’s name only?
          </p>
          <div className="flex gap-1">
            <div className="flex gap-5 ">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> Yes
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" /> No
              </label>
            </div>
            <p>(please tick as applicable)</p>
          </div>
          <p>
            If yes, please fill in mother's name in the appropriate space
            provide below
          </p>
          <p className="font-semibold">
            Father's Name (Mandatory except where mother is a single parent and
            PAN is applied by furnishing the name of mother only)
          </p>
          <div className="flex gap-24 ">
            {/* titles */}
            <div className="space-y-1 ">
              <p>Last Name / Surname</p>
              <p>First Name</p>
              <p>Middle Name</p>
            </div>
            {/* boxes */}
            <div className="space-y-1">
              <div className="flex ">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mothers Name */}
          <p className="font-semibold ">
            Mother's Name (Mandatory except where mother is a single parent and
            PAN is applied by furnishing the name of mother only)
          </p>
          <div className="flex gap-24 ">
            {/* titles */}
            <div className="space-y-1 ">
              <p>Last Name / Surname</p>
              <p>First Name</p>
              <p>Middle Name</p>
            </div>
            {/* boxes */}
            <div className="space-y-1">
              <div className="flex ">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
            </div>
          </div>
          <p>
            Select the name of either father or mother which you may like to be
            printed on PAN card (Select one only)
          </p>
          <div className="flex gap-5">
            <div className="flex gap-5">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> Father’s name
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" /> Mother’s name
              </label>
            </div>
            <p>(Please tick as applicable)</p>
          </div>
          <p className="text-[8.8pt]">
            In case no option is provided then PAN card will be issued with
            father's name except where mother is a single parent and you wish to
            apply for PAN by furnishing name of the mother only
          </p>
        </div>

        {/* ========== SECTION 7========== */}
        {/* Address */}
        <div className="bg-gray-200 font-semibold p-1 ">7. Address</div>
        <div className="ml-4">
          <p className="font-semibold">Residence Address</p>
          <div className="flex gap-5 ">
            {/* titles */}
            <div className="space-y-1 text-[9.2pt]">
              <p>Flat / Room / Door / Block No.</p>
              <p>Name of Premisses / Building / Village</p>
              <p>Road / Street / Lane/Post Office</p>
              <p>Area / Locality / Taluka/ Sub- Division</p>
              <p>Town / City / District</p>
            </div>
            {/* boxes */}
            <div className="space-y-1">
              <div className="flex ">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
            </div>
          </div>
          {/* State / UT */}
          <div className="flex items-center">
            <div className="flex flex-col-reverse">
              <label className=" items-center gap-1" />
              <input className="h-[0.5cm] w-[7cm]" type="text" /> State / Union
              Territory
            </div>
            <div>
              <label className=" items-center gap-1" />
              Pincode / Zip code
              <div className="flex">
                {boxes5.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col-reverse">
              <label className=" items-center gap-1" />
              <input className="h-[0.5cm] w-[5cm]" type="text" /> Country Name
            </div>
          </div>
        </div>
      </div>
      {/* {=======================================} */}
      {/* Page 2 */}
      <div className="bg-white text-black font-sans text-[10pt]  w-[210mm] mx-auto border border-black m-2 pb-2 ">
        <div className="ml-4">
          <p className="font-semibold">Office Address</p>
          <div className="flex gap-5 ">
            {/* titles */}
            <div className=" text-[9.2pt]">
              <p>Name of office</p>
              <p>Flat / Room / Door / Block No.</p>
              <p>Name of Premisses / Building / Village</p>
              <p>Road / Street / Lane/Post Office</p>
              <p>Area / Locality / Taluka/ Sub- Division</p>
              <p>Town / City / District</p>
            </div>
            {/* boxes */}
            <div className="">
              <div className="flex ">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex ">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
              <div className="flex">
                {boxes.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
            </div>
          </div>
          {/* State / UT */}
          <div className="flex items-center text-[7.5pt]">
            <div className="flex flex-col-reverse">
              <label className=" items-center gap-1" />
              <input className="h-[0.5cm] w-[7cm]" type="text" /> State / Union
              Territory
            </div>
            <div>
              <label className=" items-center gap-1" />
              Pincode / Zip code
              <div className="flex">
                {boxes5.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col-reverse">
              <label className=" items-center gap-1" />
              <input className="h-[0.5cm] w-[5cm]" type="text" /> Country Name
            </div>
          </div>
        </div>
        {/* ========== SECTION 8========== */}
        <div className="bg-gray-200 font-semibold p-1 text-[10pt] flex justify-between my-1">
          <span>8. Address for Communication</span>
          <div className="flex gap-6">
            <label className="flex items-center gap-1 ">
              <input type="checkbox" /> Residence
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" /> Office
            </label>
          </div>
          <span>(please tick as applicable)</span>
        </div>
        {/* ========== SECTION 9========== */}
        {/* Contact Details */}
        <div className="bg-gray-200 font-semibold p-1 text-[10pt]">
          9. Telephone Number & Email ID details
        </div>
        <div className="space-y-0.5 ml-5 p-1">
          <div className="flex items-center text-[7.5pt] gap-[0.5cm] ml-14">
            <div>
              <label className=" items-center gap-1" />
              Country code
              <div className="flex">
                {boxes6.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
            </div>
            <div>
              <label className=" items-center gap-1" />
              Area/STD Code
              <div className="flex">
                {boxes5.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
            </div>
            <div>
              <label className=" items-center gap-1" />
              Telephone / Mobile Number
              <div className="flex">
                {boxes7.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-row-reverse flex justify-end items-center text-[7.5pt] gap-[0.53cm] ">
            <label className=" items-center gap-1" />
            <input className="h-[0.5cm] w-[12.7cm]" type="text" /> Email ID
          </div>
        </div>
        {/* ========== SECTION 10========== */}
        <div className="bg-gray-200 font-semibold p-1 text-[10pt]">
          10 Status of applicant
        </div>
        {/* ========== SECTION 11========== */}
        <div className="bg-gray-200 font-semibold p-1 text-[10pt]">
          11 Registration Number (for company, firms,LLPs etc.)
        </div>
        <div className="ml-4 p-1">
          {boxes8.map((_, i) => (
            <input
              key={i}
              maxLength={1}
              className="
                  border border-black text-center
                  w-[0.5cm] h-[0.5cm]
                   outline-none
                "
            />
          ))}
        </div>
        {/* ========== SECTION 12========== */}
        <div className="bg-gray-200 font-semibold p-1 text-[9pt]">
          12 In case of a person, who is required to quote Aadhaar number or the
          Enrolment ID od Aadhaar application form as per section 139 AA
        </div>
        <div className="ml-4 p-1 text-[9pt]">
          <p className="gap-3 flex">
            Please mention your AADHAAR number (if allotted)
            <span>
              {boxes9.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center
                  w-[0.5cm] h-[0.5cm]
                    outline-none
                "
                />
              ))}
            </span>
          </p>
          <p>
            If AADHAAR number is not alloted, please mention the enrolment ID of
            Aadhr application form
            <div className="mr-[1cm] flex-row-reverse flex">
              {boxes10.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center
                  w-[0.5cm] h-[0.5cm]
                    outline-none
                "
                />
              ))}
            </div>
          </p>
          <p>
            Name as per AADHAAR letter or card or as per the Enrolment ID of
            Aadhar application form
            <div className="mr-[1cm] flex-row-reverse flex">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center
                  w-[0.5cm] h-[0.5cm]
                    outline-none
                "
                />
              ))}
            </div>
            <div className="mr-[1cm] flex-row-reverse flex">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center
                  w-[0.5cm] h-[0.5cm]
                    outline-none
                "
                />
              ))}
            </div>
            <div className="mr-[1cm] flex-row-reverse flex">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center
                  w-[0.5cm] h-[0.5cm]
                    outline-none
                "
                />
              ))}
            </div>
          </p>
        </div>

        {/* ========== SECTION 13========== */}
        <div className="bg-gray-200 font-semibold  text-[9pt] flex justify-between p-1">
          13 Source of Income
          <span className="flex">
            (please Select, <SquareCheck /> applicable)
          </span>
        </div>
        <div className="flex items-center gap-5 text-[9pt] p-1">
          <div className="flex flex-col">
            <label className="flex items-center gap-1 ">
              <input type="checkbox" className="h-[0.5cm] w-[0.5cm]" /> Salary
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" className="h-[0.5cm] w-[0.5cm]" /> Income
              from Business / Profession
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" className="h-[0.5cm] w-[0.5cm]" /> Income
              from House Property
            </label>
          </div>
          <div>
            <p className="flex gap-2">
              Business/Profession code{" "}
              <span>
                {boxes3.map((_, i) => (
                  <input
                    key={i}
                    maxLength={1}
                    className="
                  border border-black text-center
                  w-[0.5cm] h-[0.5cm]
                    outline-none
                "
                  />
                ))}
              </span>
              [For Code: Refer instructions]
            </p>
          </div>
          <div className="flex flex-col">
            <label className="flex items-center gap-1 ">
              <input type="checkbox" className="h-[0.5cm] w-[0.5cm]" /> Capital
              Gains
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" className="h-[0.5cm] w-[0.5cm]" /> Income
              from Other sources
            </label>
            <label className="flex items-center gap-1">
              <input type="checkbox" className="h-[0.5cm] w-[0.5cm]" /> No
              income
            </label>
          </div>
        </div>
        {/* ========== SECTION 14 ========== */}
        <div className="bg-gray-200 font-semibold  text-[10pt] flex justify-between p-1">
          14 Representative Assessee (RA)
        </div>
        <p className="text-[9.5pt]">
          Full name, address of the Representative Assessee, who is assessible
          under the Income Tax in respect of the person, ehose particulars have
          been given in the column 1-13
        </p>
        <div className="bg-gray-200 font-semibold pl-5">
          Full Name (Full expand name : initials are not permitted)
        </div>
        <div className="flex gap-5 p-1 ml-4">
          {/* titles */}
          <div className=" ">
            <p className="flex">
              Please select title,
              <SquareCheck /> as applicable{" "}
            </p>
            <p>Last Name / Surname</p>
            <p>First Name</p>
            <p>Middle Name</p>
          </div>
          {/* boxes */}
          <div className="">
            <div className="flex gap-2">
              <p className="flex">
                <Square /> Shri{" "}
              </p>
              <p className="flex">
                <Square /> Smt{" "}
              </p>
              <p className="flex">
                <Square /> Kumari{" "}
              </p>
              <p className="flex">
                <Square /> M/S{" "}
              </p>
            </div>
            <div className="flex ">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
            <div className="flex">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
            <div className="flex">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-200 font-semibold pl-5">Address</div>
        <div className="flex gap-4 p-1 ml-4">
          {/* titles */}
          <div className=" text-[9.2pt]">
            <p>Name of office</p>
            <p>Flat / Room / Door / Block No.</p>
            <p>Name of Premisses / Building / Village</p>
            <p>Road / Street / Lane/Post Office</p>
            <p>Area / Locality / Taluka/ Sub- Division</p>
            <p>Town / City / District</p>
          </div>
          {/* boxes */}
          <div className="">
            <div className="flex ">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
            <div className="flex ">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
            <div className="flex">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
            <div className="flex">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
            <div className="flex">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
            <div className="flex">
              {boxes.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
          </div>
        </div>
        {/* State / UT */}
        <div className="flex items-center text-[9.2pt] ml-5">
          <div className="flex flex-col-reverse">
            <label className=" items-center gap-1" />
            <input className="h-[0.5cm] w-[7cm]" type="text" /> State / Union
            Territory
          </div>
          <div>
            <label className=" items-center gap-1" />
            Pincode / Zip code
            <div className="flex">
              {boxes5.map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                />
              ))}
            </div>
          </div>
        </div>
        {/* ========== SECTION 15 ========== */}
        <div className="bg-gray-200 font-semibold  text-[9pt] flex justify-between p-1 mt-1">
          15 Documents submitted as Proof of Identity (POI), Proof of Address
          (POA) and Proof of Date of Birth (POB)
        </div>
        <div className="ml-4 p-1 text-[9pt]">
          <p>
            I/We have enclosed{" "}
            <span>
              <input type="text" className="w-[5.2cm] h-[0.4cm]" />
            </span>
            <space /> as proof of identity,{" "}
            <span>
              <input type="text" className="w-[5.7cm] h-[0.4cm]" />
            </span>
            <br /> as proof of address and{" "}
            <span>
              <input type="text" className="w-[5.2cm] h-[0.4cm]" />
            </span>
            <space /> as proof of date of birth.
            <br /> [Please refer to the instruction (as specied in Rule 114 of
            I.T. Rules, 1962) for list of mandatory certified documents to be
            submitted as applicable]
            <br /> [Annexure A, Annexure B & Annexure C are to be used wherever
            applicable]
          </p>
        </div>
        {/* ========== SECTION 16 ========== */}
        <div className="ml-1 text-[9pt]">
          <p className="">
            <span className="font-semibold">16</span> I/We{" "}
            <span>
              <input type="text" className="w-[6.7cm] h-[0.4cm]" />
            </span>
            <space /> , the applicant, in the capacity of{" "}
            <span>
              <input type="text" className="w-[5.5cm] h-[0.4cm]" />
            </span>
            <br />
            <p className="ml-4">
              do hereby declare that what is stated above is true to the best of
              my/our information and belief.
            </p>
            <div className="flex justify-between mt-4 mr-4">
              <div className="ml-4">
                <p className="flex items-center text-center gap-5">
                  Place :
                  <input type="text" className="w-[5.7cm] h-[0.4cm]" />
                </p>
                <p className="flex items-end gap-5">
                  Date &nbsp;:
                  <span>
                    <p className="flex text-center text-[9pt] ">
                      <span>
                        <p>D &nbsp;D</p>
                        {boxes3.map((_, i) => (
                          <input
                            key={i}
                            maxLength={1}
                            className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                          />
                        ))}
                      </span>
                      <span>
                        <p>M &nbsp;M</p>
                        {boxes3.map((_, i) => (
                          <input
                            key={i}
                            maxLength={1}
                            className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                          />
                        ))}
                      </span>
                      <span>
                        <p>Y &nbsp;&nbsp;Y &nbsp;&nbsp;Y &nbsp;&nbsp;Y</p>
                        {boxes4.map((_, i) => (
                          <input
                            key={i}
                            maxLength={1}
                            className="
                  border border-black text-center 
                  w-[0.5cm] h-[0.5cm] 
                   outline-none
                "
                          />
                        ))}
                      </span>
                    </p>
                  </span>
                </p>
              </div>
              <div className="flex flex-col justify-end h-[2cm] w-[6cm] border my-[-0.6cm] ">
                <p className="text-center border-t text-[7pt] font-semibold ">
                  Signature/Left Thumb Impression of <br /> Applicant (inside
                  the box)
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Form49A;
