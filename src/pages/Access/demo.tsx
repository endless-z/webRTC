import useCreateApiWithModel from '@/hooks/useCreateApiWithModel';
import { useVersionPermisstion } from '@/hooks/useVersionPermisstion';
import type { WorkTypeItem } from '@/pages/settings/WorkType/constant';
import {
  queryReceiverWoTypeList,
  receiverWoTypeSort,
} from '@/services/outWorkOrderType';
import { LocalPermissionKey } from '@/utils/localStorage';
import { useRequest } from 'ahooks';
import { Form, Spin, message } from 'jst-components';
import { useEffect, useMemo, useState } from 'react';
import CardContent from '../../components/CardContent';
import SearchForm from '../../components/SearchForm';
import { DraggableContainer } from '../../components/SortableContainer';
import { filterBizFields } from '../../helpers';
import useOpenModal from '../../hooks/useOuterModal';
import OperateContent from '../components/OperateContent';
import Setting from '../components/Setting';
import styles from './index.less';

export default () => {
  const [searchForm] = Form.useForm();
  const [workTypeList, setWorkTypeList] = useState<WorkTypeItem[]>([]);
  const { createApi } = useCreateApiWithModel();
  const { onOpenActionModal, onCloseModal } = useOpenModal();

  // 版本权限
  const { onOpenModal } = useVersionPermisstion({
    type: 'OUTER_WO_CREATE',
    key: LocalPermissionKey.OUTER_WO_CREATE,
    onClose: () => onCloseModal(),
  });

  // 外部工单列表
  const { loading: loadLoading, run: getWorkTypeList } = useRequest(
    queryReceiverWoTypeList,
    {
      manual: true,
      onSuccess: (result: any) => {
        const { data, success } = result;
        try {
          if (success) {
            setWorkTypeList(data);
          }
        } catch (error) {
          console.log('error', error);
        }
      },
    },
  );

  useEffect(() => {
    getWorkTypeList({});
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = () => {
    const formData = searchForm.getFieldsValue();
    getWorkTypeList({ data: formData });
  };

  const handleReset = () => {
    searchForm.resetFields();
    getWorkTypeList({});
  };

  // 新增外部工单类型
  const onAdd = () => {
    onOpenModal();
    onOpenActionModal({
      type: 'AddWorkType',
      data: {
        operationType: 'ADD',
      },
      onSuccess: (value: any) => {
        onEditWorkType(value);
      },
    });
  };

  // 排序
  const onSortItems = async (items: WorkTypeItem[]) => {
    const idList = items.map((item: WorkTypeItem) => item.id);
    try {
      setWorkTypeList([...items]);
      await receiverWoTypeSort({ data: { idList } });
    } catch (err) {
      console.log(err);
    }
  };

  // 授权
  const onAuthorization = (item: WorkTypeItem) => {
    onOpenActionModal({
      type: 'AuthorizationModal',
      data: {
        formData: item,
      },
      onSuccess: () => {},
    });
  };

  // 编辑工单类型
  const onClickEditWoType = (woItem: any) => {
    onCloseModal();
    onOpenActionModal({
      type: 'OuterEditWorkType',
      data: {
        operationType: 'EDIT',
        formData: woItem,
      },
      onSuccess: (values) => {
        handleSearch();
        message.success('保存成功');
        onEditWorkType(values);
      },
    });
  };

  // 编辑工单类型字段
  const onEditWorkType = useMemo(
    () => (_record: any) => {
      const propsList = filterBizFields(_record.props);
      onOpenActionModal({
        type: 'OuterEditWorkType',
        data: {
          ..._record,
          props: propsList || [],
        },
        woTypeId: _record.id,
        onClickEditWoType: onClickEditWoType,
        onSuccess: () => {
          handleSearch();
        },
      });
    },
    [], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const onSetting = (woTypeId: WorkTypeItem) => {
    createApi(Setting, {
      woTypeId: woTypeId,
      onSuccess: () => {},
    });
  };

  return (
    <div className={styles.workTypeContainer}>
      <Spin spinning={loadLoading}>
        <SearchForm
          onSearch={handleSearch}
          onReset={handleReset}
          form={searchForm}
        />
      </Spin>
      {/* 卡片类型列表 */}
      <div className="worktype-content">
        <DraggableContainer
          state={workTypeList}
          onAdd={onAdd}
          addStyle={{
            width: '405px',
            height: '200px',
          }}
          title="创建外部工单类型"
          footer={(item: any) => (
            <OperateContent
              onEditWorkType={onEditWorkType}
              item={item}
              onSetting={() => onSetting(item.id)}
              onAuthorization={() => onAuthorization(item)}
              getWorkTypeList={() => getWorkTypeList({})}
            />
          )}
          content={(item: any) => <CardContent item={item} showEdit={false} />}
          onSortItems={onSortItems}
        />
      </div>
    </div>
  );
};
