import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faPlay,
    faBackwardStep,
    faForwardStep,
    faShuffle,
    faRepeat,
    faVolumeOff,
    faVolumeHigh,
    faVolumeLow,
    faEllipsisH,
    faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

function PlayerBar() {
    return (
        <div className="NoDrag navbar bg-slate-700/70 backdrop-blur-3xl absolute bottom-0 left-0 h-28">
            <div className="w-full relative">
                <input
                    type="range"
                    min="0"
                    max="100"
                    className="range range-xs absolute -top-6 -left-2 -right-2 w-auto"
                />
                <div className="grid grid-cols-7 w-full gap-3 ">
                    <div className="avatar ">
                        <div className="w-20 rounded-md">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <span className="countdown font-mono text-sm items-center justify-end">
                        <span style={{ "--value": 10 }}></span>:
                        <span style={{ "--value": 24 }}></span>:
                        <span style={{ "--value": 54 }}></span>
                    </span>
                    <div className="flex justify-center gap-3 w-full items-center col-span-3">
                        <button type="submit" className="btn btn-circle">
                            <FontAwesomeIcon icon={faShuffle} />
                        </button>
                        <button type="submit" className="btn btn-circle">
                            <FontAwesomeIcon icon={faBackwardStep} />
                        </button>
                        <button className="btn btn-primary btn-lg btn-circle">
                            <FontAwesomeIcon icon={faPlay} />
                        </button>
                        <button type="submit" className="btn btn-circle">
                            <FontAwesomeIcon icon={faForwardStep} />
                        </button>
                        <button type="submit" className="btn btn-circle">
                            <FontAwesomeIcon icon={faRepeat} />
                        </button>
                    </div>
                    <span className="countdown font-mono text-sm items-center justify-start">
                        <span style={{ "--value": 10 }}></span>:
                        <span style={{ "--value": 24 }}></span>:
                        <span style={{ "--value": 54 }}></span>
                    </span>
                    <div className="flex items-center gap-3">
                        <button type="submit" className="btn btn-outline btn-circle">
                            <FontAwesomeIcon icon={faVolumeLow} />
                        </button>
                        <button type="submit" className="btn btn-outline btn-circle">
                            <FontAwesomeIcon icon={faWindowRestore} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerBar;
