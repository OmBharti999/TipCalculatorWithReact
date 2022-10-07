import { useRef } from "react";

import "./Input.css";

export default function Input() {
  const bill = useRef();
  const rate = useRef();
  const nop = useRef();
  const output = useRef();
  const first = useRef();
  const second = useRef();
  const calculate = () => {
    // console.log(bill.current.value);
    if (bill.current.value) {
      bill.current.value;
    } else {
      bill.current.focus();
      return;
    }
    if (rate.current.value) {
      rate.current.value;
    } else {
      rate.current.focus();
      return;
    }
    if (nop.current.value) {
      nop.current.value;
    } else {
      nop.current.focus();
      return;
    }
    let a = parseInt(bill.current.value);
    let b = parseInt(rate.current.value);
    let c = parseInt(nop.current.value);
    let tipx = a / c;
    tipx = Math.round((tipx * b) / 100);
    console.log(tipx);
    output.current.style.display = "inline";
    first.current.innerText = tipx;
    second.current.innerText = tipx + a / c;
    //console.log(typeof bill.current.value);
  };
  const clear = () => {
    bill.current.focus();
    bill.current.value = "";
    rate.current.value = "10";
    nop.current.value = "1";
    output.current.style.display = "none";
  };

  return (
    <div>
      <section>
        <div id="container">
          <div className="entry">
            <div id="inputPart">
              <div className="item1 item">
                <label>Bill Amount ₹</label>
                <input
                  type="number"
                  id="BillAmount"
                  min="0"
                  ref={bill}
                  required
                />
              </div>
              <div className="item2 item">
                <label>Tip %</label>
                <input
                  id="Tip"
                  type="number"
                  ref={rate}
                  min="0"
                  max="100"
                  required
                />
              </div>
              <div className="item3 item">
                <label>Number of People</label>
                <input id="Split" type="number" ref={nop} min="1" required />
              </div>
              <div className="item4 item">
                <button onClick={clear}>Clear</button>
                <button onClick={calculate}>Calculate</button>
              </div>
            </div>
          </div>
          <div id="outputPart" ref={output}>
            <div id="resHeading">Result For You</div>
            <div id="tipamount">
              <span>Tip You Need To Pay (₹):</span>
              <span id="display1" ref={first}></span>
            </div>
            <div id="total">
              <span>Amount You Need To Pay (₹):</span>
              <span id="display2" ref={second}></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
