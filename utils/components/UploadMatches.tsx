import { FC, useContext, useRef, useState } from 'react';
import * as XLSX from 'xlsx';

import { FootballContext } from '../../Context/FootballContext';

export const UploadTeams: FC = () => {
    const { addNewMatches } = useContext(FootballContext);
    const [fileName, setFileName] = useState("");
    const fileRef =  useRef() as React.MutableRefObject<HTMLInputElement>;

    const acceptableFileName = ["xlsx", "xls", "csv"];
    const checkFileName = (name: string) => {
        const getExtension = name.split(".").pop()?.toLowerCase();
        return acceptableFileName.includes(getExtension!);
    };

    const onHandleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if(!e.target.files) return
        const myFile = e.target.files[0];
        if (!myFile) return;

        if (!checkFileName(myFile.name)) {
            alert("Invalid File Type")
            return;
        }
    
        setFileName(myFile.name);

        const getData = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(myFile)

            fileReader.onload = (e) => {
                const bufferArray = e.target?.result;

                const wb = XLSX.read(bufferArray, { type: 'buffer' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };

            fileReader.onerror=(error) => {
                reject(error)
            };
        });
    
        getData.then((matches: unknown) => addNewMatches(matches));
    };

    const handleRemove = () => {
        fileRef.current.value = "";
        setFileName("");
    };

    return (
        <form
            style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <input
                type="file" 
                accept='.xlsx, .csv, xls' 
                style={{
                    background: "#ff7200",
                    padding: "10px",
                    borderRadius: "5px",
                }}
                multiple={false}
                onChange={e => onHandleFile(e)}
                ref={fileRef}
            />
            {
                fileName &&
                <button 
                    style={{
                        color: "blue", 
                        cursor: "pointer",
                        borderRadius: '5px',
                        padding: "10px",
                        margin: "0 10px",
                    }}
                    onClick={handleRemove}
                    >
                        clear
                </button>
            }
        </form>
    );
};
