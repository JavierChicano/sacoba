"use client"
export default function TextoAnimado() {
  return (
    <div className="mt-10 lg:block hidden">
      <button className="button " data-text="Awesome">
        <span className="actual-text">&nbsp;Sacoba&nbsp;</span>
        <span aria-hidden="true" className="hover-text" >
          &nbsp;Sacoba&nbsp;
        </span>
      </button>
      <style jsx>{`
        .button {
          margin: 0;
          height: auto;
          background: transparent;
          padding: 0;
          border: none;
          cursor: pointer;
          /* button styling */
          --border-right: 6px;
          --text-stroke-color: var(--contraste-opacidad);
          --animation-color: var(--color-base);
          --fs-size: 3em; 
          letter-spacing: 3px;
          text-decoration: none;
          font-size: var(--fs-size);
          font-family: "Arial";
          position: relative;
          text-transform: uppercase;
          color: transparent;
          -webkit-text-stroke: 1px var(--text-stroke-color);
        }

        .hover-text {
          position: absolute;
          box-sizing: border-box;
          content: attr(data-text);
          color: var(--animation-color);
          width: 0%;
          inset: 0;
          border-right: var(--border-right) solid var(--animation-color);
          overflow: hidden;
          transition: width 0.5s;
          -webkit-text-stroke: 1px var(--animation-color);
        }

        /* hover */
        .button:hover .hover-text {
          width: 100%;
          filter: drop-shadow(0 0 23px var(--animation-color));
        }
      `}</style>
    </div>
  );
}
