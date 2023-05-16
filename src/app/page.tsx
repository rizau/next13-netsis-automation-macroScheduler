import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-3 grid gap-6 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-1  grid-cols-4 ">
      {testSetList.map((testSet) => (
        <Link href={`/ytest02/sets/${testSet.value}`} key={testSet.value}>
          {/** <Link href={`/sets/${testSet.value}`} key={testSet.value}> <Link href={`/sets/${testSet.value}`} key={testSet.value}>*/}
          <div className="shadow-lg bg-sky-100 rounded-lg p-6 hover:bg-sky-300 cursor-pointer hover:shadow-xlg">
            {testSet.text}
          </div>
        </Link>
      ))}
    </div>
  );
}

const testSetList = [
  { value: 4793, text: "Tum E-Arsiv Caseleri" },
  { value: 4795, text: "Tum E-Defter Caseleri" },
  { value: 4791, text: "Tum E-Fatura Caseleri" },
  { value: 4790, text: "Tum Fatura Caseleri" },
  { value: 4796, text: "Tum Cari Caseleri" },
  { value: 4797, text: "Tum Stok Caseleri" },
  { value: 4813, text: "Tüm Dekont Caseleri" },
  { value: 4814, text: "Tum Kasa Caseleri" },
  { value: 4815, text: "Tum Musteri Cekleri Caseleri" },
  { value: 4816, text: "Tum Musteri Senetleri Caseleri" },
  { value: 4817, text: "Tum Borc Cekleri Caseleri" },
  { value: 4818, text: "Tum Borc Senetleri Caseleri" },
  { value: 4810, text: "Tum Talep Teklif Caseleri" },
  { value: 4809, text: "Tum Muhasebe Caseleri" },
  { value: 4808, text: "Tum Dis Ticaret Caseleri" },
  { value: 4820, text: "Tum MRP Caseleri" },
  { value: 4821, text: "Tum Uretim Caseleri" },
  { value: 5858, text: "Test Seti Olmayan Moduller" },
  { value: 4803, text: "Tum Rapor Modülü Caseleri" },
  { value: 4823, text: "Tum Ekran Ciktilari" },
  { value: 7235, text: "Tüm Banka Caseleri_R1" },
  { value: 7220, text: "Tum E-Irsaliye Caseleri" },
];
