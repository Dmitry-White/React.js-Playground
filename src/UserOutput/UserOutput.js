import React from 'react';

const userOutput = (props) => {
    const name = props.name;
    return (
        <div>
            <p>
                Hi! I'm {name}! And here's what I think of you. <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec viverra nisl a lectus accumsan ultrices. Cras et commodo quam.
                Phasellus interdum erat ut dignissim rhoncus.
                Sed in magna non neque feugiat efficitur. Ut id dapibus ante.
                Nunc fringilla rhoncus nulla, pharetra cursus mi vestibulum ut.
                Quisque pretium libero id nulla luctus vestibulum.
                Phasellus nisl nunc, aliquet at mollis a, viverra nec ante.
                Praesent ornare consectetur felis.
            </p>
            <p>
                Nam vitae mi vel sem egestas ultrices nec eget ipsum.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Maecenas velit ligula, lobortis vel fringilla sed, pharetra quis orci.
                Praesent rutrum non sem ut blandit. Donec finibus, ante et tristique lacinia,
                risus purus tincidunt sapien, eu tempor ex nisi ut ipsum.
                Curabitur id felis quis magna ullamcorper viverra eu sit amet ligula.
            </p>
        </div>
    )
};

export default userOutput;