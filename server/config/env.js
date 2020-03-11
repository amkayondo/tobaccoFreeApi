import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config();

const { DEV_DATABASE, PROD_DATABSE, TEST_DATABASE, NODE_ENV } = process.env;

const ConnectionConfig = () => {
    if(NODE_ENV == 'developent'){
        return new Pool({
            connectionString: DEV_DATABASE
        })
    } if(NODE_ENV === 'production'){
        return new Pool({
            connectionString: PROD_DATABSE
        })
    } if(NODE_ENV === 'testing'){
        return new Pool({
            connectionString: TEST_DATABASE
        })
    }
}

export default ConnectionConfig