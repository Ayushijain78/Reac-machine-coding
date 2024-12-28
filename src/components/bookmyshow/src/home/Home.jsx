
import styles from "./styles.module.css";
import { data } from "./utils/data";
import classnames from "classnames";
import { useState } from "react";

function Home() {
  const seatMap = data;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [numSeats, setNumSeats] = useState(1);
  const handleSeatSelection = (seatNo, rowCode, isAvail, isPreferred) => {
    if (selectedSeats.length === numSeats) {
      setSelectedSeats([]);
      return;
    }
    const isSeatAlreadySelected = selectedSeats.find(
      (seat) => seat.rowCode === rowCode && seat.seatNo === seatNo
    );
    if (seatNo && isAvail && !isSeatAlreadySelected) {
      setSelectedSeats([
        ...selectedSeats,
        { seatNo: seatNo, rowCode: rowCode },
      ]);
    }
    if (isSeatAlreadySelected) {
      const removeItem = selectedSeats.filter(
        (seat) => seat.rowCode !== rowCode && seat.seatNo !== seatNo
      );
      setSelectedSeats([...removeItem]);
    }
  };

  const mapData = () => {
    return seatMap.categoryData.map((cat) => {
      return {
        cateName: cat.areaName,
        categoryData: seatMap.seatData.filter(
          (item) => item.areaCode === cat.areaCode
        ),
      };
    });
  };

  return (
    <>
      <div className={styles.page}>
        <div>
          <div className={styles.numSelector}>
            <span>How many seats do you want?</span>
            <div>
              {[...new Array(9)].map((_, i) => (
                <div
                  onClick={() => setNumSeats(i + 1)}
                  key={i}
                  className={classnames(
                    styles.seat,
                    i + 1 === numSeats && styles.selected
                  )}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.map}>
          {mapData().map(({ cateName, categoryData }) => {
            return (
              <div key={cateName}>
                <div>{cateName}</div>
                {
                  <div>
                    {categoryData.map(({ rowCode, seats }, i) => {
                      return (
                        <div key={`${rowCode}-${i}`}>
                          <span className={styles.seats}>
                            <span
                              className={classnames(
                                styles.rowName,
                                styles.seat
                              )}
                            >
                              {rowCode}
                            </span>
                            {seats.map(
                              (
                                { seatNo, isWalkway, isPreferred, isAvail },
                                i
                              ) => {
                                const filterd = selectedSeats.find((select) => {
                                  return (
                                    select.rowCode === rowCode &&
                                    select.seatNo === seatNo
                                  );
                                });
                                return (
                                  <div
                                    onClick={() =>
                                      handleSeatSelection(
                                        seatNo,
                                        rowCode,
                                        isAvail,
                                        isPreferred
                                      )
                                    }
                                    key={`${i}-${rowCode}`}
                                    className={classnames(
                                      styles.seat,
                                      isWalkway && styles.walkway,
                                      isPreferred && styles.preferred,
                                      !isAvail && styles.booked,
                                      filterd && styles.selected
                                    )}
                                  >
                                    {seatNo}
                                  </div>
                                );
                              }
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                }
                <span className={styles.area} />
              </div>
            );
          })}
        </div>

        <div className={styles.legendContainer}>
          <div className={styles.legend}>
            Selected:{" "}
            <div className={classnames(styles.seat, styles.selected)}></div>
          </div>
          <div className={styles.legend}>
            Booked:{" "}
            <div className={classnames(styles.seat, styles.booked)}></div>
          </div>
          <div className={styles.legend}>
            Preferred:{" "}
            <div className={classnames(styles.seat, styles.preferred)}></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home