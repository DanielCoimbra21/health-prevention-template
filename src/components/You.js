import React from "react";

function You({values, setValues}) {

    let handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setValues({...values, [name]: value})
    }

    return (
        <>
            <div style={{display: "grid", marginRight: "175px"}}>
                <div className="number-group">
                    <span className="question">Sex</span>
                    <div className="input-wrapper">
                        <div className="input-container">
                            <input type="radio"
                                   id="man"
                                   className="radio-button"
                                   name="sexe"
                                   value="1"
                                   checked={values.sexe === "1"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="man" className="radio-tile-label">Man</label>
                            </div>
                        </div>

                        <div className="input-container">
                            <input type="radio"
                                   id="woman"
                                   className="radio-button"
                                   name="sexe"
                                   value="0"
                                   checked={values.sexe === "0"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="woman" className="radio-tile-label">Woman</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="number-group">
                    <span className="question">Age</span>
                    <input type="number"
                           id="age"
                           name="age"
                           min="15" max="100"
                           value={values.age}
                           onChange={handleChange}
                    />
                </div>

                <div className="number-group">
                    <span className="question">Weight</span>
                    <input type="number"
                           id="poids"
                           name="poids"
                           min="15" max="100"
                           value={values.poids}
                           onChange={handleChange}
                    />
                </div>

                <div className="number-group">
                    <span className="question">Height</span>
                    <input type="number"
                           id="taille"
                           name="taille"
                           min="100" max="250"
                           value={values.taille}
                           onChange={handleChange}
                    />
                </div>
            </div>
            <div style={{display: "grid"}}>
                <div className="radio-tile-group">
                    <span className="question">Do you have you a high tension?</span>
                    <div className="input-wrapper">
                        <div className="input-container">
                            <input type="radio"
                                   id="yes"
                                   className="radio-button"
                                   name="syst"
                                   value="1"
                                   checked={values.syst === "1"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="yes" className="radio-tile-label">Yes</label>
                            </div>
                        </div>

                        <div className="input-container">
                            <input type="radio"
                                   id="no"
                                   className="radio-button"
                                   name="syst"
                                   value="0"
                                   checked={values.syst === "0"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="no" className="radio-tile-label">No</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="radio-tile-group">
                    <span className="question">Do you have high blood sugar?</span>
                    <div className="input-wrapper">
                        <div className="input-container">
                            <input type="radio"
                                   id="yes"
                                   className="radio-button"
                                   name="glyc"
                                   value="1"
                                   checked={values.glyc === "1"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="yes" className="radio-tile-label">Yes</label>
                            </div>
                        </div>

                        <div className="input-container">
                            <input type="radio"
                                   id="no"
                                   className="radio-button"
                                   name="glyc"
                                   value="0"
                                   checked={values.glyc === "0"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="no" className="radio-tile-label">No</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="radio-tile-group">
                    <span className="question">Do you have high cholesterol?</span>
                    <div className="input-wrapper">
                        <div className="input-container">
                            <input type="radio"
                                   id="yes"
                                   className="radio-button"
                                   name="chol"
                                   value="1"
                                   checked={values.chol === "1"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="yes" className="radio-tile-label">Yes</label>
                            </div>
                        </div>

                        <div className="input-container">
                            <input type="radio"
                                   id="no"
                                   className="radio-button"
                                   name="chol"
                                   value="0"
                                   checked={values.chol === "0"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="no" className="radio-tile-label">No</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="radio-tile-group">
                    <span className="question">Do you have diabetes?</span>
                    <div className="input-wrapper">
                        <div className="input-container">
                            <input type="radio"
                                   id="yes"
                                   className="radio-button"
                                   name="diab"
                                   value="1"
                                   checked={values.diab === "1"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="yes" className="radio-tile-label">Yes</label>
                            </div>
                        </div>

                        <div className="input-container">
                            <input type="radio"
                                   id="no"
                                   className="radio-button"
                                   name="diab"
                                   value="0"
                                   checked={values.diab === "0"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="no" className="radio-tile-label">No</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="radio-tile-group">
                    <span className="question">Have you already had a heart attack?</span>
                    <div className="input-wrapper">
                        <div className="input-container">
                            <input type="radio"
                                   id="yes"
                                   className="radio-button"
                                   name="inf"
                                   value="1"
                                   checked={values.inf === "1"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="yes" className="radio-tile-label">Yes</label>
                            </div>
                        </div>

                        <div className="input-container">
                            <input type="radio"
                                   id="no"
                                   className="radio-button"
                                   name="inf"
                                   value="0"
                                   checked={values.inf === "0"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="no" className="radio-tile-label">No</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="radio-tile-group">
                    <span className="question">Have you already had a stroke?</span>
                    <div className="input-wrapper">
                        <div className="input-container">
                            <input type="radio"
                                   id="yes"
                                   className="radio-button"
                                   name="avc"
                                   value="1"
                                   checked={values.avc === "1"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="yes" className="radio-tile-label">Yes</label>
                            </div>
                        </div>

                        <div className="input-container">
                            <input type="radio"
                                   id="no"
                                   className="radio-button"
                                   name="avc"
                                   value="0"
                                   checked={values.avc === "0"}
                                   onChange={handleChange}
                            />
                            <div className="radio-tile">
                                <label htmlFor="no" className="radio-tile-label">No</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default You;
