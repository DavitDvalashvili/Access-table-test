/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import userData from "../data.json";

export const Report = ({ range }) => {
  let dayRange = Array.from({ length: 31 }, (_, i) => i + 1).slice(
    range === 1 ? 0 : range === 2 ? 10 : range === 3 ? 20 : 30,
    range === 1 ? 10 : range === 2 ? 20 : range === 3 ? 30 : 31
  );

  return (
    <div className="px-5 mx-0 ">
      <table
        className="col-12"
        style={{
          border: "1px solid black",
        }}
      >
        <tbody>
          <tr className="text-center">
            <td
              colSpan={19}
              className="background-table fw-bold text-white py-1"
            >
              სამუშაო დროის აღრიცხვა
            </td>
          </tr>
          <tr className="text-center background-table fw-bold text-white ">
            <td colSpan={3} className=" py-1">
              ორგანიზაციის დასახელება
            </td>
            <td colSpan={16} className=" py-1">
              ოპერა
            </td>
          </tr>
          <tr className="text-center background-table fw-bold text-white">
            <td colSpan={3} className=" py-1">
              საიდენტიფიკაციო კოდი
            </td>
            <td colSpan={16} className=" py-1">
              02033652648
            </td>
          </tr>
          <tr className="text-center background-table fw-bold text-white">
            <td colSpan={3} className=" py-1">
              სტრუქტურული ერთეული
            </td>
            <td colSpan={16} className=" py-1">
              ოპერა
            </td>
          </tr>
          <tr className=" background-table fw-bold text-white">
            <td colSpan={3} className="text-center py-1">
              შედგენის თარიღი
            </td>
            <td colSpan={16} className="text-left  text-small py-1 pl-1">
              01/02/2024
            </td>
          </tr>
          <tr className=" background-table fw-bold text-white ">
            <td colSpan={3} className="text-center py-1">
              საანგარიშო პერიოდი
            </td>
            <td colSpan={16} className="text-left  text-small py-1 pl-1">
              02/08/2024
            </td>
          </tr>
          <tr className="text-center background-table text-white">
            <td rowSpan={5} className="col-1 text-small ">
              გვარი, სახელი
            </td>
            <td rowSpan={5} className="col-1 text-small ">
              პირადი ნომერი/ტაბელის ნომერი
            </td>
            <td rowSpan={5} className="col-1 text-small ">
              თანამდებობა (სპეციალობა, პროფესია)
            </td>
            <td colSpan={10} className="text-small ">
              აღნიშვნები სამუშაოზე გამოცხადების/არგამოცხადების შესახებ თარიღების
              მიხედვით თვის განმავლობაში
            </td>
            <td colSpan={6} className="col-2 text-small ">
              სულ ნამუშევარი თვის განმავლობაში
            </td>
          </tr>
          <tr className="background-table text-white">
            {dayRange.map((day, index) => (
              <td rowSpan={4} key={index} className="text-small text-center">
                {day}
              </td>
            ))}
            {[...Array(Math.abs(10 - dayRange.length))].map((_, index) =>
              dayRange.length !== 10 ? (
                <td
                  rowSpan={4}
                  key={index}
                  className="text-small text-center"
                ></td>
              ) : null
            )}
          </tr>
          <tr className="text-center background-table text-white">
            <td rowSpan={3} className="text-small">
              დღე
            </td>
            <td colSpan={5} className="text-small">
              საათი
            </td>
          </tr>
          <tr className="text-center background-table text-white">
            <td rowSpan={2} className="text-small">
              ჯამი
            </td>
            <td colSpan={4} className="text-small">
              მათ შორის
            </td>
          </tr>
          <tr className="text-center background-table text-white">
            <td className="text-small">ზეგანა კვეთური</td>
            <td className="text-small">ღამე</td>
            <td className="text-small">
              დასვენების დღეებში ნამუშევარი საათების რაოდენობა
            </td>
            <td className="text-small">სხვა (საჭიროების შემთხვევაში)</td>
          </tr>
          {userData.map((user, index) => {
            let dayRange = user.days.slice(
              range === 1 ? 0 : range === 2 ? 10 : range === 3 ? 20 : 30,
              range === 1 ? 10 : range === 2 ? 20 : range === 3 ? 30 : 31
            );

            return (
              <tr key={index} className="text-center   ">
                <td className="text-small small_size lighter-secondary py-1">
                  {user.Name}
                </td>
                <td className="text-small small_size lighter-secondary py-1">
                  {user.Id}
                </td>
                <td className="text-small small_size lighter-secondary py-1">
                  {user.Position}
                </td>
                {dayRange.map((day, index) => (
                  <td
                    key={index}
                    className="text-small small_size lighter-secondary py-1"
                  >
                    {day.work_hours ? day.work_hours : day.absence_reason}
                  </td>
                ))}
                {[...Array(Math.abs(10 - dayRange.length))].map((_, index) =>
                  dayRange.length !== 10 ? (
                    <td
                      key={index}
                      className="text-small small_size lighter-secondary py-1"
                    ></td>
                  ) : null
                )}
                <td className="text-small small_size lighter-secondary py-1">
                  {user.Day_count}
                </td>
                <td className="text-small small_size lighter-secondary py-1">
                  {user.Hours}
                </td>
                <td className="text-small small_size lighter-secondary py-1">
                  {user.Overtime}
                </td>
                <td className="text-small small_size lighter-secondary py-1">
                  {user.Night}
                </td>
                <td className="text-small small_size lighter-secondary py-1">
                  {user.Rest_days_total}
                </td>
                <td className="text-small small_size lighter-secondary py-1">
                  {user.Other}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="my-5">
        <tbody className="text-small">
          <tr>
            <td
              colSpan={2}
              className="text-center background-table fw-bold p-2 text-white"
            >
              პირობითი აღნიშვნები
            </td>
          </tr>
          <tr className="text-center lighter-secondary">
            <td className="p-2">დ</td>
            <td className="p-2">დასვენება / უქმე დღეები</td>
          </tr>
          <tr className="text-center lighter-secondary">
            <td className="p-2">ა/შ</td>
            <td className="p-2">ანაზღაურებადი შვებულება</td>
          </tr>
          <tr className="text-center lighter-secondary">
            <td className="p-2">დ/შ-ა</td>
            <td className="p-2">ადეკრეტული შვებულება - ანაზღაურებადი</td>
          </tr>
          <tr className="text-center lighter-secondary">
            <td className="p-2">დ/შ-უ</td>
            <td className="p-2">დეკრეტული შვებულება - ანაზღაურების გარეშე</td>
          </tr>
          <tr className="text-center lighter-secondary">
            <td className="p-2">ს/ფ</td>
            <td className="p-2">საავადმყოფო ფურცელი</td>
          </tr>
          <tr className="text-center lighter-secondary">
            <td className="p-2">გ</td>
            <td className="p-2">გაცდენა</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
