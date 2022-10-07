import "./footer.css";
export default function Footer() {
  const date = new Date();
  return (
    <footer>
      <div id="footer">
        <p className="para">
          A tip or gratuity is an extra sum of money paid to certain service
          workers for a provided service. Tip amounts, as well as acceptance,
          vary in different parts of the world. In some countries in East Asia,
          such as Japan, tips are seen as insulting and can sometimes be
          interpreted as a bribe. In yet other countries, such as the United
          States, tipping is widely expected, and in many cases, is even
          factored into a service worker's compensation towards satisfying the
          minimum wage requirement. This is important to note, since although
          tipping is entirely voluntary, many servers depend on tips to make a
          living in countries
        </p>
        <div className="discramer">
          This site has been created by using ReactJS.{" "}
        </div>
        <div className="developer">
          Developed by Om @copyright {date.getFullYear()}.{" "}
        </div>
      </div>
    </footer>
  );
}
