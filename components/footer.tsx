
import Typography from '@material-ui/core/Typography';

export const Footer = (props) => {
    return (
        <div>
            <footer>
                <Typography variant="body1">Handcrafted by Amir Saleem &amp; Sanchit Jain</Typography>
            </footer>
            <style jsx>{
                `
                    footer {
                        text-align: center;
                        margin-top: 30px;
                        padding: 20px 30px;
                    }
                `
            }</style>
        </div>
    )
}

export default Footer;
