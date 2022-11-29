export const styles = {

    bannerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: '800px',
        background: '#eff3f6'
    },
    
    pictureWrapper: {
        width: '60%',
        backgroundImage: `url('https://images.unsplash.com/photo-1533568367292-63cab2810e01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '799px',
        margin: '10px'
    },

    contentWrapper: {
        width: '40%',
        marginRigth: '10%',
        padding: '20px',
        background: 'white',
        borderRadius: '10px',
        boxShadow: '0px 11px 8px -1px rgba(61,61,61,0.75)',
        margin: '0 20px',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.38)',
            transition: 'all 0.7s'
        }
    },
};  