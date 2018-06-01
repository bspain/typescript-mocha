import * as process from 'process';
import * as fs from 'fs';

export default function DoesFileExistOnEnvironmentPath(filename: string) : boolean
{
    let envPath = <string>process.env.PATH;

    let pathSplitter = GetOSBasedPathSeparator();
    let paths = envPath.split(pathSplitter);

    for (let path of paths)
    {        
        let search = `${path}\\${filename}`;
        try
        {
            let stats = fs.statSync(search);
            if (stats != null)
            {
                return true;
            }
        }
        catch(e)
        {

        }
    };

    return false;
}

export function GetOSBasedPathSeparator() : string
{
    if (process.env.hasOwnProperty("OS") && (<string>process.env.OS).includes('Windows'))
    {
        return ";";
    }

    return ":";
}