import './loadingSpinner.css'
import LoadingSpinnerGIF from '../../assets/loading-spinner.gif'


function LoadingSpinner() {
    return (
        <div className='d-flex al-center jc-center loading-overlay-container'>
            <img src={LoadingSpinnerGIF} alt="" height="80px"/>
        </div>
    )
}

export default LoadingSpinner