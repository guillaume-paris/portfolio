import React, { useState, FormEvent, ChangeEvent } from 'react';
// import { MapComponent } from '../utils/GoogleMapComponent';

const Contact = () => {

    // const sendEmail = async (to: string, from: string, subject: string, content: string) => {
    //     try {
    //       const result = await axios.post('https://smtp.sendgrid.net:25', {
    //         personalizations: [
    //           {
    //             to: [
    //               {
    //                 email: to,
    //               },
    //             ],
    //             subject: subject,
    //           },
    //         ],
    //         from: {
    //           email: from,
    //         },
    //         content: [
    //           {
    //             type: 'text/plain',
    //             value: content,
    //           },
    //         ],
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    //           'Content-Type': 'application/json',
    //         },
    //       });
    //       console.log(result);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 10000);
        setFormData({
            fullname: '',
            email: '',
            subject: '',
            message: ''
        });
    };
    
    return (
        <div className="mx-10 my-4">
            {/* <MapComponent /> */}
            <form onSubmit={handleSubmit} className=" p-10">
                <div className="mb-4">
                    <label className="text-white block font-bold mb-2" htmlFor="nom">
                    Full name
                    </label>
                    <input
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="text-white block font-bold mb-2" htmlFor="prenom">
                    Email
                    </label>
                    <input
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="text-white block font-bold mb-2" htmlFor="objet">
                    Subject
                    </label>
                    <input
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="text-white block font-bold mb-2" htmlFor="message">
                    Body message
                    </label>
                    <textarea
                    className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleTextAreaChange}
                    required
                    />
                </div>
                <div className="flex items-center justify-end">
                    <button
                    className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600"
                    type="submit"
                    >
                    Envoyer
                    </button>
                </div>
            </form>
            {submitted && (
                <div className="p-4 bg-green-200 text-green-800">
                    Le formulaire a bien ??t?? envoy?? !
                </div>
            )}
        </div>
    );
}

export default Contact;