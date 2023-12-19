import React, { useEffect, useState } from 'react'
import './style.css'
import background from '../../assets/Background.png'
import { FaPencilAlt } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import { axiosInstance } from '../../services/axiosInstance';



function RowList() {

    const [teachers, setTeachers] = useState([])

    const profList = [
        { image: background, nif: '1221312', name: 'Lindomar da Silva' },
        { image: background, nif: '1221312', name: 'Lindomar da Silva' },
        { image: background, nif: '1221312', name: 'Lindomar da Silva' },
        { image: background, nif: '1221312', name: 'Lindomar da Silva' },
        { image: background, nif: '1221312', name: 'Lindomar da Silva' },
    ]


    const fetchData = async () => {

        try {
            const teachersList = await axiosInstance.get('teacher', {
                headers: {
                    Authorization: "Token 75d305fe4156ccd45d3abd0ce940e492d8b9b96b"
                }
            })
            console.log(teachersList)
            setTeachers(teachersList.data)
        } catch (error) {
            console.log(error.response)
        }

    }



    useEffect(() => {
        fetchData()
    },[])



    return (
        <div className='signup-container'>
            <h3>Professores cadastrados</h3>
            <div className="scroll-list">
                <table>

                    <tr>
                        <td className='top-infos'>Imagem</td>
                        <td className='top-infos'>NIF</td>
                        <td className='top-infos'>Nome</td>
                    </tr>
                    {teachers.map((item, index) => (
                        <tr key={index}>
                            <td className='info-td'><img src={item.image} className='img-profile' alt="" /></td>
                            <td className='info-td'>{item.nif}</td>
                            <td className='info-td'>{item.name}</td>
                            
                            <td className='info-td edit'><FaPencilAlt/></td>
                            <td className='info-td exclude'><IoIosRemoveCircle/>    </td>
                        </tr>
                    ))}
                </table>
            </div>

        </div>
    )
}

export default RowList