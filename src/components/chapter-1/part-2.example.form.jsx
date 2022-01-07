import React,{useEffect, useState} from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';

export const ExampleFormControl = ({setStartTime, setEndTime, setInterValTime, setMode}) => {

    const [firstTime, setFirstTime] = useState({hour: 0, minute: 0, second: 0});
    const [secondTime, setSecondTime] = useState({hour: 0, minute: 0, second: 0});
    const [selected, setSelected] = useState({
        firstSelected: -1,
        secondSelected: -1
    });
    const selectOptions = [
    {
        value: 0,
        label: 'Thời gian bắt đầu'
    },
    {
        value: 2,
        label: 'Cộng thêm'
    },
    {
        value: 3,
        label: 'Trừ đi'
    },
    {
        value: 1,
        label: 'Thời gian kết thúc'
    }]

    useEffect(()=>{
        console.log(selected);
    },[selected])

    useEffect(()=>{
        console.log("start: ", firstTime);
        console.log("end: ", secondTime);
    },[secondTime, firstTime])

    return(
        <Container className='h-100 d-flex flex-wrap align-items-center justify-content-center'>
            <Row>
                <Row className=''>
                    <select className="form-select mb-2" onChange={(e)=>setSelected({...selected, firstSelected: e.target.value})}>
                    <option value={-1}>Chọn loại thời gian</option>
                    {
                        selectOptions.map(option => {
                            if(option.value != selected.secondSelected) 
                                return <option 
                                            value={option.value} 
                                            key={option.value}
                                        >{option.label}</option>
                            }
                        )
                    }
                    </select>
                    <TimeInput setTime={setFirstTime}/>
                </Row>
                <Row className=''>
                    <select className="form-select mb-2" onChange={(e)=>setSelected({...selected, secondSelected: e.target.value})}>
                    <option value={-1}>Chọn loại thời gian</option>
                    {
                        selectOptions.map(option => {
                            if(option.value != selected.firstSelected) 
                                return <option 
                                            value={option.value} 
                                            key={option.value}
                                        >{option.label}</option>
                            }
                        )
                    }
                    </select>
                    <TimeInput setTime={setSecondTime}/>
                </Row>
            </Row>
            <Row className='w-100'>
                <Button variant='success' className='rounded-pill w-100'>Test</Button>
            </Row>
            
        </Container>
    )


}

const TimeInput = ({setTime}) => {

    const [hourInput, setHourInput] = useState(0);
    const [minuteInput, setMinuteInput] = useState(0);
    const [hourErrorMessage, setHourErrorMessage] = useState('');
    const [minuteErrorMessage, setMinuteErrorMessage] = useState('');
    const [generalErr, setGeneralErr] = useState('');

    useEffect(()=>{
        setTime({hour: hourInput, minute: minuteInput, second: 0})
    },[hourInput, minuteInput])

    const handleHourInput = (e) => {
        let hour = e.target.value
        if (Math.floor(hour) != hour) {
            setGeneralErr('Chỉ nhập số tự nhiên') 
            return
        }
        setGeneralErr('');
        if (hour > 23) {
            setHourErrorMessage('Số giờ không được vượt quá 23')
        } else {
            setHourErrorMessage('')
            setHourInput(hour);
        }
    }

    const handleMinuteInput = (e) => {
        const minute = e.target.value
        if (Math.floor(minute) != minute) {
            setGeneralErr('Chỉ nhập số tự nhiên') 
            return;
        }
        setGeneralErr('')
        if (minute > 59) {
            setMinuteErrorMessage('Số phút không được vượt quá 59')
        } else {
            setMinuteErrorMessage('')
            setMinuteInput(minute);
        }
    }

    return(
        <div>
            <div className="input-group mb-1">
                <input 
                    type="number" 
                    className="form-control" 
                    aria-label="Giờ"
                    onChange={handleHourInput}
                    min="0" step="1"
                >
                </input>
                <span className="input-group-text">Giờ</span>
                <input 
                    type="number" 
                    className="form-control" 
                    aria-label="Phút"
                    onChange={handleMinuteInput}
                    min="0" step="1"
                ></input>
                <span className="input-group-text">Phút</span>
            </div>
            <div className='err mb-3' style={{color: 'red'}}>
                <div>{hourErrorMessage}</div>
                <div>{minuteErrorMessage}</div>
                <div>{generalErr}</div>
            </div>
        </div>
    )
}