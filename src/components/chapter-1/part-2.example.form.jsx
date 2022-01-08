import React,{useEffect, useState} from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';

export const ExampleFormControl = ({setTime, setIntervalTime, setMode}) => {

    const [firstTime, setFirstTime] = useState({hour: 0, minute: 0, second: 0});
    const [secondTime, setSecondTime] = useState({hour: 0, minute: 0, second: 0});
    const [errMes, setErrMes] = useState('');
    const [selected, setSelected] = useState({
        firstSelected: -1,
        secondSelected: -1
    });
    const firstSelectOptions = [
    {
        value: 0,
        label: 'Thời gian bắt đầu'
    },
    {
        value: 1,
        label: 'Trừ đi'
    }]
    const secondSelectOptions = [
        {
            value: 2,
            label: 'Thời gian kết thúc'
        },
        {
            value: 1,
            label: 'Cộng thêm'
        }]

    useEffect(()=>{
        console.log(selected);
    },[selected])

    useEffect(()=>{
        console.log("start: ", firstTime);
        console.log("end: ", secondTime);
    },[secondTime, firstTime])

    const getSecondOfTime = (time) => {
        return (parseInt(time.hour) * 3600) + (parseInt(time.minute) * 60);
    }

    const hourDif = (time1, time2) => {
        const dif = getSecondOfTime(time1) - getSecondOfTime(time2);
        if (dif < 0) return -1;
        else return {hour: Math.floor(dif/3600), minute: Math.floor((dif%3600)/60), second: 0}
    }

    const greaterThan = (time1, time2) => {
        console.log(time1, time2);
        if(time1.hour > time2.hour) return 1;
        else if (time1.hour < time2.hour) return -1;
        else {
            if (time1.minute > time2.minute) return 1
            else if (time1.minute < time2.minute) return -1
            else return 0;
        }
    }

    const handleSubmit = () => {
        setErrMes('');
        if (selected.firstSelected == -1) {
            if (selected.secondSelected == -1) {
                setErrMes('Vui lòng chọn loại thời gian.');
                return;
            } else {
                setErrMes('Bạn chưa chọn loại thời gian số 1.');
                return;
            }
        } else {
            if (selected.secondSelected == -1) {
                setErrMes('Bạn chưa chọn loại thời gian số 2.');
                return;
            }
        }
        if (selected.firstSelected == 0) {
            if (selected.secondSelected == 1) {
                setTime({...firstTime});
                setIntervalTime({...secondTime})
                setMode(true);
            } else if(selected.secondSelected == 2) {
                const check = greaterThan(firstTime, secondTime);
                console.log(check);
                if (greaterThan(firstTime, secondTime) == -1) {
                    setTime({...firstTime});
                    setIntervalTime({...hourDif(secondTime, firstTime)});
                    setMode(true);
                } else {
                    setTime({...firstTime})
                    setIntervalTime({...hourDif(firstTime, secondTime)});
                    setMode(false);
                } 
            }
        } else {
            setTime({...secondTime});
            setIntervalTime({...firstTime});
            setMode(false);
        }
    }

    return(
        <Container className='h-100 d-flex flex-wrap align-items-center justify-content-center'>
            <Row>
                <Row className=''>
                    <select className="form-select mb-2" onChange={(e)=>setSelected({...selected, firstSelected: e.target.value})}>
                    <option value={-1}>Chọn loại thời gian</option>
                    {
                        firstSelectOptions.map(option => {
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
                        secondSelectOptions.map(option => {
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
            <Row style={{color: 'red'}}>{errMes}</Row>
            <Row className='w-100'>
                <Button variant='success' className='rounded-pill w-100' onClick={handleSubmit}>Kiểm tra kết quả</Button>
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
        setTime({hour: parseInt(hourInput), minute: parseInt(minuteInput), second: 0})
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