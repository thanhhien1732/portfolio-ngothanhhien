import { useEffect, useState } from "react";
import { differenceInDays, parseISO, differenceInYears } from "date-fns";
import CountUp from "react-countup";
import axios from "axios";

export interface I_infoGithub {
    totalRepo: number;
    daysDifference: number;
    yearsDifference: number;
}

function Counter() {
    const [infoGithub, setInfoGithub] = useState<I_infoGithub>({
        totalRepo: 0,
        daysDifference: 0,
        yearsDifference: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://api.github.com/users/thanhhien1732`);

            const createdAtDate = parseISO(data.created_at);
            const currentDate = new Date();

            const daysDifference = differenceInDays(currentDate, createdAtDate);
            const yearsDifference = differenceInYears(currentDate, createdAtDate);

            setInfoGithub({
                totalRepo: data.public_repos,
                daysDifference,
                yearsDifference,
            });
        };
        fetchData();
    }, []);

    return (
        <div className="d-flex w-100 h-100 justify-content-evenly justify-content-xl-between align-items-center flex-wrap">

            {/* years of experience */}
            <div>
                <div className="fw-bolder fs-1 text-accent mb-1 custom-counter-value" style={{ color: 'rgba(var(--bs-link-color-rgb), 1)' }}>
                    <CountUp start={0} end={infoGithub?.yearsDifference} duration={5} /> +
                </div>
                <div className="text-uppercase fw-bolder" style={{ fontSize: '0.75rem', letterSpacing: '1px', lineHeight: 1.4 }}>
                    <span>years of</span>
                    <br />
                    <span>experience</span>
                </div>
            </div>

            <div className="d-none d-sm-block" style={{ width: '1px', height: '80px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>

            {/* day of experience */}
            <div>
                <div className="fw-bolder fs-1 text-accent mb-1 custom-counter-value" style={{ color: 'rgba(var(--bs-link-color-rgb), 1)' }}>
                    <CountUp start={0} end={infoGithub?.daysDifference} duration={5} /> +
                </div>
                <div className="text-uppercase fw-bolder" style={{ fontSize: '0.75rem', letterSpacing: '1px', lineHeight: 1.4 }}>
                    <span>day of</span>
                    <br />
                    <span>experience</span>
                </div>
            </div>

            <div className="d-none d-sm-block" style={{ width: '1px', height: '80px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>

            {/* Total Repositories */}
            <div>
                <div className="fw-bolder fs-1 text-accent mb-1 custom-counter-value" style={{ color: 'rgba(var(--bs-link-color-rgb), 1)' }}>
                    <CountUp start={0} end={infoGithub?.totalRepo} duration={5} /> +
                </div>
                <div className="text-uppercase fw-bolder" style={{ fontSize: '0.75rem', letterSpacing: '1px', lineHeight: 1.4 }}>
                    <span>Total</span>
                    <br />
                    <span>Repositories</span>
                </div>
            </div>

        </div>
    );
}
export default Counter;