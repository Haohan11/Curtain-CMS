import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import {MenuComponent} from '@/_metronic/assets/ts/components'
import {initialQueryState, KTIcon} from '@/_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const UsersListFilter = () => {
  // const {updateState} = useQueryRequest()
  const isLoading = false
  const [sort, setSort] = useState('')
  const [sortItem, setSortItem] = useState('')
  const [isEnable, setIsEnable] = useState('')
  const router =useRouter();
  


  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const resetData = () => {
    setSortItem('')
    setSort('')
    setIsEnable("")
    // router.push({
    //   query: { ...router.query,sort:"",item:"",isEnable:isEnable},
    // }); 
  }

  const filterData = () => {
    router.push({
      query: { ...router.query,sort:sort,item:sortItem,isEnable:isEnable},
    }); 
  }

  useEffect(()=>{
    setSortItem('')
    setSort('')
    setIsEnable("")
  },[router.query.pageName])

  return (
    <>
      {/* begin::Filter Button */}
      <button
        disabled={isLoading}
        type='button'
        className='btn btn-light-primary me-3'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        篩選
        <KTIcon iconName='filter' className='fs-2' />
      </button>
      {/* end::Filter Button */}
      {/* begin::SubMenu */}
      <div className='menu menu-sub menu-sub-dropdown w-300px w-md-325px' data-kt-menu='true'>
        {/* begin::Header */}
        <div className='px-7 py-5'>
          <div className='fs-5 text-gray-900 fw-bolder'>篩選條件</div>
        </div>
        {/* end::Header */}

        {/* begin::Separator */}
        <div className='separator border-gray-200'></div>
        {/* end::Separator */}

        {/* begin::Content */}
        <div className='px-7 py-5' data-kt-user-table-filter='form'>
          {/* begin::Input group */}
          <div className='mb-10'>
            <label className='form-label fs-6 fw-bold'>順序:</label>
            <select
              className='form-select form-select-solid fw-bolder'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-user-table-filter='role'
              data-hide-search='true'
              onChange={(e) => {setSort(e.target.value);setSortItem('')}}
              value={sort}
            >
              <option value=''></option>
              <option value='DESC'>由新到舊</option>
              <option value='ASC'>由舊到新</option>
            </select>
          </div>
          {/* end::Input group */}

          {
            router.isReady && router.asPath.includes('/stock/') && (
              <div className='mb-10'>
              <label className='form-label fs-6 fw-bold'>{router.asPath.includes('/stock/management')?'商品順序:':'名稱順序'}</label>
              <select
                className='form-select form-select-solid fw-bolder'
                data-kt-select2='true'
                data-placeholder='Select option'
                data-allow-clear='true'
                data-kt-user-table-filter='sortItem'
                data-hide-search='true'
                onChange={(e) => {setSortItem(e.target.value);setSort('')}}
                value={sortItem}
              >
                <option value=''></option>
                <option value='ASC'>由A到Z</option>
                <option value='DESC'>由Z到A</option>
              </select>
            </div>
            )
          }

          {/* begin::Input group */}
          <div className='mb-10'>
            <label className='form-label fs-6 fw-bold'>啟用狀況:</label>
            <select
              className='form-select form-select-solid fw-bolder'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-user-table-filter='two-step'
              data-hide-search='true'
              onChange={(e) => setIsEnable(e.target.value)}
              value={isEnable}
            >
              <option value=''></option>
              <option value='1'>啟用</option>
              <option value='0'>非啟用</option>
            </select>
          </div>
          {/* end::Input group */}

          {/* begin::Actions */}
          <div className='d-flex justify-content-end'>
            <button
              type='button'
              disabled={isLoading}
              onClick={resetData}
              className='btn btn-light btn-active-light-primary fw-bold me-2 px-6'
              // data-kt-menu-dismiss='true'
              data-kt-user-table-filter='reset'
            >
              重置
            </button>
            <button
              disabled={isLoading}
              type='button'
              onClick={filterData}
              className='btn btn-primary fw-bold px-6'
              data-kt-menu-dismiss='true'
              data-kt-user-table-filter='filter'
            >
              套用
            </button>
          </div>
          {/* end::Actions */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::SubMenu */}
    </>
  )
}

export {UsersListFilter}
