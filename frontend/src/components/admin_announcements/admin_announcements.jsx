import {useRef, useState, useEffect} from 'react'


function AnnouncementsAdmin() {
    const [searchTerm, setSearchTerm] = useState([])
    const [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/announcements/all')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setAnnouncements(data.reverse())
        });
    }, [])
    return (
        <>
            <div className="row pt-5 announcements_list">
                <div className="col-xl-12">
                    <div className="card ">
                        <div className="card-body">
                            <div className="box">
                            <form name="search" className='search_form'>
                                <input type="text" className="input" name="txt"  onChange={e => {
                                    setSearchTerm(e.target.value)
                                }}/> <span className="deff">Search</span>
                                </form>
                            </div>
                            <a href="/" className="btn btn-danger btn-sm float-right" >Dashboardga qaytish</a>
                            <a href="/admin/announcement/add" className="btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right"> E`lon qo'shish</a>

                            <h4 className="mt-0 mb-4 pt-2">Barcha e`lonlar ro'yhati</h4>
                            <div className="table-responsive mt-5">
                                <table className="table table-hover">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Rasm</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nomi</th>
                                        <th scope="col">Sana</th>
                                        <th scope="col">Matn</th>
                                        <th scope="col">EDIT </th>
                                        <th scope="col">DELETE </th>
                                    </tr>
                                    </thead>
                                    {announcements.filter((val) => {
                                        if(searchTerm == ""){
                                            return val
                                        }else if(val.title_uz.toLowerCase().includes(searchTerm.toLowerCase())){
                                            return val
                                        }
                                    }).map(item => (
                                        <tbody className="list_item_2">
                                        <td><img src={item.img} className="sizeArticleImage" alt=""/></td>
                                        <td>{item.id}</td>
                                        <td>{item.title_uz}</td>
                                        <td>{item.date}</td>
                                        <td className='list_body'>Content...</td>
                                        <td className=""><a href={`announcements/edit/${item.id}`} className="btn btn-warning button_news_edit bg-success">Edit</a></td>
                                        <td className=""><a className="btn btn-danger button_delete_news bg-danger text-light" onClick={() => {
                                            let answer = prompt("siz rostan o'chirmoqchimisiz? Y/N")
                                            if(answer == "Y"){
                                                fetch('http://localhost:3001/announcements/delete', {
                                                method: 'DELETE',
                                                headers: {
                                                  'Accept': 'application/json',
                                                  'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify(
                                                    {
                                                        id: item.id
                                                    }
                                                )
                                            }).then(function(res){ return res.json(); })
                                                .then(function(data){ 
                                                    console.log("ok");
                                                })
                                                window.location.reload()
                                            }else{

                                            }
                                        }}>Delete</a></td>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AnnouncementsAdmin;
