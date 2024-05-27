import React, { useState, useEffect } from 'react';
import "./Style/CategoryStyle.css";
import { format } from 'date-fns';
import axios from 'axios';
import SideBar from './sidebar';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



const List = () => {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editingItemId, setEditingItemId] = useState(null);
    const [action, setAction] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        commissionRate: '',
        createdAt: new Date()
    });





    useEffect(() => {
        // Gửi yêu cầu đến API để lấy danh sách các mục từ cơ sở dữ liệu
        axios.get('https://66530502813d78e6d6d6e6e2.mockapi.io/category/getAll/category')
            .then(response => {
                const dataWithFormattedDate = response.data.map(item => ({
                    ...item,
                    formattedDate: format(new Date(item.createdAt * 1000), 'dd/MM/yyyy HH:mm:ss')
                }));
                // Cập nhật trạng thái với dữ liệu đã chuyển đổi
                setItems(dataWithFormattedDate);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);








    //xu li Add action
    const handleAddCategory = () => {
        setAction('Add Category');
        setShowModal(true);
    };
    const handleSaveCategory = () => {
        console.log("Category data:", formData);
        setShowSuccessMessage(true);
    };


    //xu li Edit action
    const handleEdit = (id) => {
        setAction('Edit Category');
        console.log("Edit button clicked for item with ID:", id);
        setShowEditModal(true);
        setEditingItemId(id);
    }
    const renderEditForm = (id) => {
        const itemToEdit = items.find(item => item.id === id);
        if (!itemToEdit) return null;

        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => setShowEditModal(false)}>×</span>
                    <h2>Edit Category</h2>
                    <form>
                        <label>ID:</label>
                        <input type="text" name="id" value={itemToEdit.id} onChange={handleChange} />
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />

                        <label>Icon:</label>
                        <input type="text" name="icon" value={formData.icon} onChange={handleChange} />

                        <label>Commission Rate:</label>
                        <input type="text" name="commissionRate" value={formData.commissionRate} onChange={handleChange} />

                        <button type="button" id='save_Button' onClick={handleSaveEdit}>Save</button>
                    </form>
                </div>
            </div>
        );
    };
    const handleSaveEdit = () => {
        setShowSuccessMessage(true);
        setShowEditModal(false);
    }


    //Xu li Delete action
    const handleDelete = (id) => {
        setAction("Delete");
        setEditingItemId(id);
        setShowDeleteModal(true);

    };
    const renderDeleteAlert = (id) => {
        const ItemtoDelete = items.find(item => item.id === id);
        if (!ItemtoDelete) return null;
        return (
            <div class='Delete-Alert'>

                <div class='Delete-Alert-Window'>
                    <h1>Delete Category</h1>
                    <span>Do you want to delete {ItemtoDelete.name}?</span>
                    <button id='deleteConfirm' onClick={confirmDelete}>Yes</button>
                    <button id='deleteCancel' onClick={cancelDelete}>No</button>
                </div>

            </div>
        )
    }
    const confirmDelete = () => {
        setShowDeleteModal(false);
        setShowSuccessMessage(action)
    }
    const cancelDelete = () => {
        setShowDeleteModal(false);
    }







    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const renderMessage = (action) => {
        return (<div className="success-message">
            {action} success!!!
        </div>)
    }


    setTimeout(() => {
        setShowSuccessMessage(false);
    }, 3000);







    return (
        <div class="Category">
            <div><SideBar></SideBar></div>

            <div class="Category_main">
                <div className="AddCategoryButton" style={{ textAlign: 'right' }}>
                    <button style={{ width: '200px', backgroundColor: '#4076ff' }} onClick={handleAddCategory}>Add Category</button>
                </div>

                <div class="Category_List">
                    <table>
                        <thead>
                            <tr>
                                <th>STT/ID</th>
                                <th>Name</th>
                                <th>Icon</th>
                                <th>Commission Rate</th>
                                <th>Created At</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (

                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><img class='icon' src={'https://cdn3.iconfinder.com/data/icons/document-icons-2/30/647709-image-1024.png'} /></td>
                                    <td>{item.commissionRate}</td>
                                    <td>{item.formattedDate}</td>
                                    <td>
                                        <button onClick={() => handleEdit(item.id)}><div class="icon-button"><FaEdit /></div></button>
                                        <button style={{ backgroundColor: "#e4193b" }} onClick={() => handleDelete(item.id)}><div class='icon-button'><MdDelete /></div>   </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>




            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>×</span>
                        <h2>Add Category</h2>
                        <form>
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />

                            <label>Icon:</label>
                            <input type="text" name="icon" value={formData.icon} onChange={handleChange} />

                            <label>Commission Rate:</label>
                            <input type="text" name="commissionRate" value={formData.commissionRate} onChange={handleChange} />

                            <button type="button" id='save_Button' onClick={handleSaveCategory}>Save</button>
                        </form>
                    </div>
                </div>
            )}

            {showEditModal && editingItemId && renderEditForm(editingItemId)}
            {showSuccessMessage && renderMessage(action)}
            {showDeleteModal && renderDeleteAlert(editingItemId)}

        </div>
    );
};

export default List;
