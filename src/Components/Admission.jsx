import { useState } from "react";


const Admission = () => {

    const [collegeName, setCollegeName] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [candidateInfo, setCandidateInfo] = useState({
        candidateName: "",
        subject: "",
        candidateEmail: "",
        candidatePhone: "",
        address: "",
        dateOfBirth: "",
        image: null,
    });

    const handleCollegeClick = (name) => {
        setCollegeName(name);
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the candidate information to the backend or perform any desired action here
        console.log(candidateInfo);
    };
    return (
        <div className="container mx-auto my-4">
            <h1 className="text-center text-4xl font-bold mb-4 ">College Admission</h1>
            <div className="college-list text-center">
                {/* Display college names here */}
                <p className=" text-red-200 text-2xl font-bold">
                    <button
                        
                        onClick={() => handleCollegeClick("University of ABC")}
                    >
                        University of ABC
                    </button>
                </p>
                <p className=" text-red-200 text-2xl font-bold">
                    <button
                        
                        onClick={() => handleCollegeClick("XYZ College")}
                    >
                        XYZ College
                    </button>
                </p>
                <p className=" text-red-200 text-2xl font-bold">
                    <button
                        
                        onClick={() => handleCollegeClick("ABC State University")}
                    >
                        ABC State University
                    </button>
                </p>
                <p className=" text-red-200 text-2xl font-bold">
                    <button
                        
                        onClick={() => handleCollegeClick("University of DEF")}
                    >
                        University of DEF
                    </button>
                </p>
                <p className=" text-red-200 text-2xl font-bold">
                    <button
                        
                        onClick={() => handleCollegeClick("PQR Institute of Technology")}
                    >
                        PQR Institute of Technology
                    </button>
                </p>
                <p className=" text-red-200 text-2xl font-bold">
                    <button
                        
                        onClick={() => handleCollegeClick("LMN Research Center")}
                    >
                        LMN Research Center
                    </button>
                </p>
                {/* Add more colleges as needed */}
            </div>

            {showForm && (
                <div className="mt-4">
                    {/* Candidate information input fields */}
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-xl font-bold mb-2">Apply to {collegeName}</h2>
                        <label className="block mb-2" htmlFor="candidateName">
                            Candidate Name:
                        </label>
                        <input
                            type="text"
                            id="candidateName"
                            required
                            className="w-full border rounded-md py-2 px-3 mb-2"
                            // value={candidateInfo.candidateName}
                            onChange={(e) =>
                                setCandidateInfo({ ...candidateInfo, candidateName: e.target.value })
                            }
                        />
                        <label className="block mb-2" htmlFor="candidateName">
                        Subject:
                        </label>
                        <input
                            type="text"
                            id="candidateName"
                            required
                            className="w-full border rounded-md py-2 px-3 mb-2"
                            // value={candidateInfo.candidateName}
                            onChange={(e) =>
                                setCandidateInfo({ ...candidateInfo, candidateName: e.target.value })
                            }
                        />
                        <label className="block mb-2" htmlFor="candidateName">
                        Candidate Email:
                        </label>
                        <input
                            type="text"
                            id="candidateName"
                            required
                            className="w-full border rounded-md py-2 px-3 mb-2"
                            // value={candidateInfo.candidateName}
                            onChange={(e) =>
                                setCandidateInfo({ ...candidateInfo, candidateName: e.target.value })
                            }
                        />
                        <label className="block mb-2" htmlFor="candidateName">
                        Candidate Phone number:
                        </label>
                        <input
                            type="text"
                            id="candidateName"
                            required
                            className="w-full border rounded-md py-2 px-3 mb-2"
                            // value={candidateInfo.candidateName}
                            onChange={(e) =>
                                setCandidateInfo({ ...candidateInfo, candidateName: e.target.value })
                            }
                        />
                        <label className="block mb-2" htmlFor="candidateName">
                        Candidate address:
                        </label>
                        <input
                            type="text"
                            id="candidateName"
                            required
                            className="w-full border rounded-md py-2 px-3 mb-2"
                            // value={candidateInfo.candidateName}
                            onChange={(e) =>
                                setCandidateInfo({ ...candidateInfo, candidateName: e.target.value })
                            }
                        />
                        <label className="block mb-2" htmlFor="candidateName">
                        Candidate  date of birth:
                        </label>
                        <input
                            type="text"
                            id="candidateName"
                            required
                            className="w-full border rounded-md py-2 px-3 mb-2"
                            // value={candidateInfo.candidateName}
                            onChange={(e) =>
                                setCandidateInfo({ ...candidateInfo, candidateName: e.target.value })
                            }
                        />
                        <label className="block mb-2" htmlFor="candidateName">
                        Candidate image field.:
                        </label>
                        <input
                            type="text"
                            id="candidateName"
                            required
                            className="w-full border rounded-md py-2 px-3 mb-2"
                            // value={candidateInfo.candidateName}
                            onChange={(e) =>
                                setCandidateInfo({ ...candidateInfo, candidateName: e.target.value })
                            }
                        />
                        {/* Add other input fields here (Subject, Candidate Email, etc.) */}
                        <input
                            type="submit"
                            value="Submit"
                            className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer"
                        />
                    </form>
                </div>
            )}
        </div>
    );
};

export default Admission;