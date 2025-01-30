/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import userData from "../data.json";

export const Report = ({ range }) => {
  return (
    <Container className="p-2">
      <table
        className="col-12"
        style={{
          border: "1px solid black",
        }}
      >
        <tbody>
          <tr className="text-center">
            <td colSpan={19} className="bg-secondary fw-bold text-white">
              სამუშაო დროის აღრიცხვა
            </td>
          </tr>
          <tr className="text-center bg-secondary fw-bold text-white">
            <td colSpan={3}>ორგანიზაციის დასახელება</td>
            <td colSpan={16}>ოპერა</td>
          </tr>
          <tr className="text-center bg-secondary fw-bold text-white">
            <td colSpan={3}>საიდენტიფიკაციო კოდი</td>
            <td colSpan={16}>02033652648</td>
          </tr>
          <tr className="text-center bg-secondary fw-bold text-white">
            <td colSpan={3}>სტრუქტურული ერთეული</td>
            <td colSpan={16}>ოპერა</td>
          </tr>
          <tr className=" bg-secondary fw-bold text-white">
            <td colSpan={3} className="text-center">
              შედგენის თარიღი
            </td>
            <td colSpan={16} className="text-left  text-small">
              01/02/2024
            </td>
          </tr>
          <tr className=" bg-secondary fw-bold text-white l">
            <td colSpan={3} className="text-center">
              საანგარიშო პერიოდი
            </td>
            <td colSpan={16} className="text-left  text-small">
              02/08/2024
            </td>
          </tr>

          <tr className="text-center">
            <td rowSpan={5} className="col-1 text-small lighter-secondary">
              გვარი, სახელი
            </td>
            <td rowSpan={5} className="col-1 text-small lighter-secondary">
              პირადი ნომერი/ტაბელის ნომერი
            </td>
            <td rowSpan={5} className="col-1 text-small lighter-secondary">
              თანამდებობა (სპეციალობა, პროფესია)
            </td>
            <td colSpan={10} className="text-small lighter-secondary">
              აღნიშვნები სამუშაოზე გამოცხადების/არგამოცხადების შესახებ თარიღების
              მიხედვით თვის განმავლობაში
            </td>
            <td colSpan={6} className="col-2 text-small lighter-secondary">
              სულ ნამუშევარი თვის განმავლობაში
            </td>
          </tr>

          <tr>
            {Array.from({ length: 31 }, (_, i) => i + 1)
              .slice(
                range === 1 ? 0 : range === 2 ? 10 : range === 3 ? 20 : 30,
                range === 1 ? 10 : range === 2 ? 20 : range === 3 ? 30 : 31
              )
              .map((day, index) => (
                <td rowSpan={4} key={index} className="text-small text-center">
                  {day}
                </td>
              ))}
            {[...Array(9)].map((_, index) =>
              Array.from({ length: 31 }, (_, i) => i + 1).slice(
                range === 1 ? 0 : range === 2 ? 10 : range === 3 ? 20 : 30,
                range === 1 ? 10 : range === 2 ? 20 : range === 3 ? 30 : 31
              ).length === 1 ? (
                <td
                  rowSpan={4}
                  key={index}
                  className="text-small text-center"
                ></td>
              ) : null
            )}
          </tr>

          <tr className="text-center">
            <td rowSpan={3} className="text-small">
              დღე
            </td>
            <td colSpan={5} className="text-small">
              საათი
            </td>
          </tr>

          <tr className="text-center">
            <td rowSpan={2} className="text-small">
              ჯამი
            </td>
            <td colSpan={4} className="text-small">
              მათ შორის
            </td>
          </tr>

          <tr className="text-center">
            <td className="text-small">ზეგანა კვეთური</td>
            <td className="text-small">ღამე</td>
            <td className="text-small">
              დასვენების დღეებში ნამუშევარი საათების რაოდენობა
            </td>
            <td className="text-small">სხვა (საჭიროების შემთხვევაში)</td>
          </tr>

          {userData.map((user, index) => (
            <tr key={index} className="text-center ">
              <td className="text-small small_size ">{user.Name}</td>
              <td className="text-small small_size">{user.Id}</td>
              <td className="text-small small_size">{user.Position}</td>
              {user.days
                .slice(
                  range === 1 ? 0 : range === 2 ? 10 : range === 3 ? 20 : 30,
                  range === 1 ? 10 : range === 2 ? 20 : range === 3 ? 30 : 31
                )
                .map((day, index) => (
                  <td key={index} className="text-small small_size">
                    {day.work_hours ? day.work_hours : day.absence_reason}
                  </td>
                ))}
              {[...Array(9)].map((_, index) =>
                user.days.slice(
                  range === 1 ? 0 : range === 2 ? 10 : range === 3 ? 20 : 30,
                  range === 1 ? 10 : range === 2 ? 20 : range === 3 ? 30 : 31
                ).length == 1 ? (
                  <td key={index}></td>
                ) : null
              )}

              <td className="text-small small_size">{user.Day_count}</td>
              <td className="text-small small_size">{user.Hours}</td>
              <td className="text-small small_size">{user.Overtime}</td>
              <td className="text-small small_size">{user.Night}</td>
              <td className="text-small small_size">{user.Rest_days_total}</td>
              <td className="text-small small_size">{user.Other}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
