import { ColorRing } from "react-loader-spinner";

export default function Loader() {
    return(
        <div className="text-center">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#655E9D', '#F2BB1A', '#4C9BCD', '#514A83', '#CFCFCF']}
            />
        </div>
    );
}