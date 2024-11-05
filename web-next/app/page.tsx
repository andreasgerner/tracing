import styles from "@/app/page.module.css";
import { Company } from "@/types";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const res = await fetch("http://company.localhost/companies");
  let companies: Company[] = await res.json();

  return (
    <table className={styles.table}>
      <thead>
      <tr>
        <th>Firmenname</th>
        <th>Aktionen</th>
      </tr>
      </thead>
      <tbody>
      {companies.map(company =>
        <tr key={company.id}>
          <td>{company.name}</td>
          <td>
            <Link href={`/${company.id}`}>Details anzeigen</Link>
          </td>
        </tr>)}
      </tbody>
    </table>
  )
    ;
}
