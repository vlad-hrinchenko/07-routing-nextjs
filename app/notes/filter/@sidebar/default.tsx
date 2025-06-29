"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const tags = ["All", "Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function DefaultSidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.list}>
          {tags.map((tag) => {
            const href =
              tag === "All" ? "/notes/filter" : `/notes/filter/${tag}`;
            const isActive = pathname === href;

            return (
              <li key={tag}>
                <Link
                  href={href}
                  className={`${styles.link} ${isActive ? styles.active : ""}`}
                >
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
