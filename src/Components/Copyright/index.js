import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Copyright() {
    return (
        <div className="w-full mt-12 mb-6">
            <h2 className="text-center">
                <FontAwesomeIcon icon={faCopyright} /> Copyright 2022 Vo Phuoc Huy . All Rights Reserved
            </h2>
        </div>
    );
}

export default Copyright;
