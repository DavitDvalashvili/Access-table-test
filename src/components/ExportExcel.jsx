import React from "react";
import * as XLSX from "xlsx";

const ExportExcelWithMergedCells = () => {
  const handleExport = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([]);

    const merges = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } },
      { s: { r: 0, c: 3 }, e: { r: 0, c: 39 } },
      { s: { r: 1, c: 0 }, e: { r: 1, c: 2 } },
      { s: { r: 1, c: 3 }, e: { r: 1, c: 39 } },
      { s: { r: 2, c: 0 }, e: { r: 2, c: 2 } },
      { s: { r: 2, c: 3 }, e: { r: 2, c: 39 } },
      { s: { r: 3, c: 0 }, e: { r: 3, c: 2 } },
      { s: { r: 3, c: 3 }, e: { r: 3, c: 39 } },
      { s: { r: 4, c: 0 }, e: { r: 4, c: 2 } },
      { s: { r: 4, c: 3 }, e: { r: 4, c: 4 } },
      { s: { r: 4, c: 5 }, e: { r: 4, c: 39 } },
      { s: { r: 5, c: 0 }, e: { r: 5, c: 2 } },
      { s: { r: 5, c: 3 }, e: { r: 5, c: 4 } },
      { s: { r: 5, c: 5 }, e: { r: 5, c: 39 } },
      { s: { r: 6, c: 0 }, e: { r: 6, c: 39 } },
      { s: { r: 7, c: 0 }, e: { r: 12, c: 0 } },
      { s: { r: 7, c: 1 }, e: { r: 12, c: 1 } },
      { s: { r: 7, c: 2 }, e: { r: 12, c: 2 } },
      { s: { r: 7, c: 3 }, e: { r: 7, c: 33 } },
      { s: { r: 7, c: 34 }, e: { r: 7, c: 39 } },
      { s: { r: 8, c: 34 }, e: { r: 12, c: 34 } },
      { s: { r: 8, c: 35 }, e: { r: 8, c: 39 } },
      { s: { r: 9, c: 35 }, e: { r: 12, c: 35 } },
      { s: { r: 9, c: 36 }, e: { r: 9, c: 39 } },
      { s: { r: 10, c: 36 }, e: { r: 12, c: 36 } },
      { s: { r: 10, c: 37 }, e: { r: 12, c: 37 } },
      { s: { r: 10, c: 38 }, e: { r: 12, c: 38 } },
      { s: { r: 10, c: 39 }, e: { r: 12, c: 39 } },
    ];

    for (let col = 3; col <= 33; col++) {
      merges.push({ s: { r: 8, c: col }, e: { r: 12, c: col } });
    }

    const data = [
      ["", "", "", "სამუშაო დროის აღრიცხვის ფორმა", ...Array(36).fill(null)],
      [
        "ორგანიზაციის დასახელება",
        "",
        "",
        "Logycal sysrems company",
        ...Array(36).fill(null),
      ],
      ["საიდენტიფიკაციო კოდი", "", "", "000000", ...Array(36).fill(null)],
      ["სტრუქტურული ერთეული", "", "", "დეველოპერები", ...Array(36).fill(null)],
      ["შედგენის თარიღი", "", "", "თებერვალი", ...Array(36).fill(null)],
      ["საანგარიშო პერიოდი", "", "", "01/02/05", ...Array(36).fill(null)],
      Array(39).fill(null), // Corrected row to have 39 elements
      [
        "სახელი, გვარი",
        "პირადი ნომერი/ტაბელის ნომერი",
        "თანამდებობა  (სპეციალობა, პროფესია)",
        "აღნიშვნები სამუშაოზე გამოცხადების/არგამოცხადების შესახებ თარიღების მიხედვით თვის განმავლობაში",
        ...Array(30).fill(null),
        "სულ ნამუშევარი თვის განმავლობაში",
        ...Array(5).fill(null),
      ],
      [
        ...Array(3).fill(null),
        ...Array.from({ length: 31 }, (_, i) => (i + 1).toString()),
        "დღე",
        "საათი",
        ...Array(4).fill(null),
      ],
      [...Array(35).fill(null), "ჯამი", "მათ შორის", ...Array(3).fill(null)],
      [
        ...Array(36).fill(null),
        "ზეგანაკვეთური",
        "ღამე",
        "დასვენება/ უქმე დღეებში ნამუშევარი საათების ჯამური რაოდენობა (თვე) ",
        "სხვა (საჭიროების შემთხვევაში)",
      ],
    ];

    // Add the data to the worksheet first
    XLSX.utils.sheet_add_aoa(worksheet, data);

    // Apply merges to the worksheet
    worksheet["!merges"] = merges;

    worksheet["!cols"] = [
      { wch: 20 },
      { wch: 20 },
      { wch: 20 },
      ...Array(37).fill({ wch: 10 }),
    ];

    // Create the workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Merged Table");

    // Export the file
    XLSX.writeFile(workbook, "Merged_Table.xlsx");
  };

  return (
    <div>
      <button onClick={handleExport}>Export Merged Table to Excel</button>
    </div>
  );
};

export default ExportExcelWithMergedCells;
