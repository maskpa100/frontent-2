import s from "./Header.module.scss";
export default function Header() {
  return (
    <>
      <div className={s.header}>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="#">Еще что-то </a>
          </li>
        </ul>
      </div>
    </>
  );
}
