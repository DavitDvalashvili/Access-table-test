import React, { useEffect, useState } from "react";
import { Container, Table, Col } from "react-bootstrap";
import userData from "../data";

export const Report = () => {
  const [range, setRange] = useState(1);
  const [rangeDays, setRangeDays] = useState(null);

  const getRangeElements = (range) => {
    if (range === 1) {
      setRangeDays(userData.slice(0, 10));
    } else if (range === 2) {
      setRangeDays(userData.slice(10, 20));
    } else if (range === 3) {
      setRangeDays(userData.slice(20, 30));
    } else if (range === 4) {
      setRangeDays(userData.slice(30, 31));
    }
  };

  useEffect(() => {
    getRangeElements(range);
  }, [range]);

  return (
    <Container className="p-2 ">
      <table
        className="col-12"
        style={{
          border: "1px solid black",
        }}
      >
        <tbody>
          <tr className="text-center">
            <td colSpan={19}>სამუშაო დროის აღრიცხვა</td>
          </tr>
          <tr className="text-center">
            <td colSpan={3}>ორგანიზაციის დასახელება</td>
            <td colSpan={16}>ოპერა</td>
          </tr>
          <tr className="text-center">
            <td colSpan={3}>საიდენტიფიკაციო კოდი</td>
            <td colSpan={16}>02033652648</td>
          </tr>
          <tr className="text-center">
            <td colSpan={3}>სტრუქტურული ერთეული</td>
            <td colSpan={16}>ოპერა</td>
          </tr>
          <tr className="text-center">
            <td colSpan={3}>შედგენის თარიღი</td>
            <td colSpan={16}>01/02/2024</td>
          </tr>
          <tr className="text-center">
            <td colSpan={3}>საანგარიშო პერიოდი</td>
            <td colSpan={16}>02/08/2024</td>
          </tr>

          <tr className="text-center">
            <td rowSpan={5} className="col-1">
              გვარი, სახელი
            </td>
            <td rowSpan={5} className="col-1">
              პირადი ნომერი/ტაბელის ნომერი
            </td>
            <td rowSpan={5} className="col-1">
              თანამდებობა (სპეციალობა, პროფესია)
            </td>
            <td colSpan={10} className="col-7">
              აღნიშვნები სამუშაოზე გამოცხადების/არგამოცხადების შესახებ თარიღების
              მიხედვით თვის განმავლობაში
            </td>
            <td colSpan={6} className="col-2">
              სულ ნამუშევარი თვის განმავლობაში
            </td>
          </tr>

          <tr className="text-center">
            <td rowSpan={4} style={{ width: "3%" }}>
              1
            </td>
            <td rowSpan={4} style={{ width: "3%" }}>
              2
            </td>
            <td rowSpan={4} style={{ width: "3%" }}>
              3
            </td>
            <td rowSpan={4} style={{ width: "3%" }}>
              4
            </td>
            <td rowSpan={4} style={{ width: "3%" }}>
              5
            </td>
            <td rowSpan={4} style={{ width: "3%" }}>
              6
            </td>
            <td rowSpan={4} style={{ width: "3%" }}>
              7
            </td>
            <td rowSpan={4} style={{ width: "3%" }}>
              8
            </td>
            <td rowSpan={4} style={{ width: "3%" }}>
              9
            </td>
            <td rowSpan={4} style={{ width: "3%" }}>
              10
            </td>
          </tr>

          <tr className="text-center">
            <td rowSpan={3} style={{ width: "4%" }}>
              დღე
            </td>
            <td colSpan={5}>საათი</td>
          </tr>

          <tr className="text-center">
            <td rowSpan={2} style={{ width: "4%" }}>
              ჯამი
            </td>
            <td colSpan={4}>მათ შორის</td>
          </tr>

          <tr className="text-center">
            <td style={{ width: "3%" }}>ზეგანა კვეთური</td>
            <td style={{ width: "4%" }}>ღამე</td>
            <td style={{ width: "3%" }}>
              დასვენების დღეებში ნამუშევარი საათების რაოდენობა
            </td>
            <td style={{ width: "3%" }}>სხვა (საჭიროების შემთხვევაში)</td>
          </tr>

          <tr className="text-center">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
          </tr>

          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.Name}</td>
              <td>{user.Id}</td>
              <td>{user.Position}</td>
              {getRangeElements(range).map((day) => {
                return (
                  <td key={day.day}>
                    {day.work_hours > 0 ? day.work_hours : day.absence_reason}
                  </td>
                );
              })}
              <td>{user.Day_count}</td>
              <td>{user.Hours}</td>
              <td>{user.Overtime}</td>
              <td>{user.Night}</td>
              <td>{user.Rest_days_total}</td>
              <td>{user.Other}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
