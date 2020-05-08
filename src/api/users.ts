import request from '@/utils/request'

export const getUsers = (params: any) =>
  request({
    url: '/users',
    method: 'get',
    params
  })

export const getUserInfo = (data: any) =>
  request({
    url: '/users/info',
    method: 'post',
    data
  })

export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'get'
  })

export const updateUser = (username: string, data: any) =>
  request({
    url: `/users/${username}`,
    method: 'put',
    data
  })

export const deleteUser = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'delete'
  })

export const login = (data: any) =>
  request({
    url: '/users/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/users/logout',
    method: 'post'
  })

export const register = (data: any) =>
  request({
    url: '/users/register',
    method: 'post',
    data
  })
// --------------------------------------------------------------------------------------------------------------------------
export const sendMessage: any = (params: any) => {
  return request({
    url: '/api/admin/user/send_sms',
    method: 'get',
    params
  })
}

export const clubUserLogin: any = (data: any) => {
  return request({
    url: '/api/admin/user/login',
    method: 'post',
    data
  })
}

// 验证手机号是否存在
export const telIsExist: any = (data: any) => {
  return request({
    url: '/api/admin/user/telIsExist',
    method: 'get',
    params: data
  })
}

// 微信扫码登录
export const weChatLoginGet: any = (data: any) => {
  return request({
    url: '/api/admin/user/weChatLogin',
    method: 'get',
    params: data
  })
}

// 微信用户信息
export const weChatBind: any = (data: any) => {
  return request({
    url: '/api/admin/member/weChatBind',
    method: 'get',
    params: data
  })
}

// 微信用户uniID
export const getUnionId: any = (data: any) => {
  return request({
    url: '/api/admin/member/getUnionId',
    method: 'get',
    params: data
  })
}

export const getUserJurisdiction: any = (data: any) => {
  return request({
    url: '/api/admin/privileges/getUserPrivileges',
    method: 'get',
    params: data
  })
}

export function chickToken(data: any) {
  return request({
    url: '/api/admin/club/show',
    method: 'get',
    params: data
  })
}

export function clubShow(data: any) {
  return request({
    url: '/api/admin/club/show',
    method: 'get',
    params: data
  })
}

export function saveClubMsg(data: any) {
  return request({
    url: '/api/admin/club/save',
    method: 'post',
    data
  })
}

export function subMsgAPic(data: any) {
  return request({
    url: '/api/admin/club/save_article',
    method: 'post',
    data
  })
}

export function addCustomField(data: any) {
  return request({
    url: '/api/admin/club/addCustomField',
    method: 'post',
    data
  })
}

export function getCustomField(data: any) {
  return request({
    url: '/api/admin/custom/getCustomField',
    method: 'get',
    params: data
  })
}

export function deleteCustom(data: any) {
  return request({
    url: '/api/admin/custom/removeCustomField',
    method: 'get',
    params: data
  })
}

export function subApplyAduit(data: any) {
  return request({
    url: '/api/admin/apply/audit',
    method: 'post',
    data
  })
}

export function getMemberList(data: any) {
  return request({
    url: '/api/admin/member/list',
    method: 'get',
    params: data
  })
}

export function getUserForTeamList(data: any) {
  return request({
    url: '/api/admin/team/queryUserForTeam',
    method: 'get',
    params: data
  })
}

export function exportAllMsg(data: any) {
  return request({
    url: '/api/admin/member/export',
    method: 'get',
    params: data
  })
}

export function getApplyList(data: any) {
  return request({
    url: '/api/admin/apply/list',
    method: 'get',
    params: data
  })
}
// 战队列表
export function getSchoolList(data: any) {
  return request({
    url: '/api/admin/team/list',
    method: 'get',
    params: data
  })
}

// 新建校队
export function createSchoolTeam(data: any) {
  return request({
    url: '/api/admin/team/school/create',
    method: 'post',
    data
  })
}

// 游戏下拉
export function getGameList(data: any) {
  return request({
    url: '/api/admin/game/list',
    method: 'get',
    params: data
  })
}

// 获取详情
export function getTeamInfo(data: any) {
  return request({
    url: '/api/admin/team/detail',
    method: 'get',
    params: data
  })
}

// 添加队员
export function addTeamMember(data: any) {
  return request({
    url: '/api/admin/team/addUser',
    method: 'post',
    data
  })
}

// 移除队员
export function deletTeamMember(data: any) {
  return request({
    url: '/api/admin/team/removeUser',
    method: 'post',
    data
  })
}

// 设置队长
export function setTeamLeader(data: any) {
  return request({
    url: '/api/admin/team/changeCaptain',
    method: 'post',
    data
  })
}

// 强制解散
export function breakTeam(data: any) {
  return request({
    url: '/api/admin/team/breakTeam',
    method: 'post',
    data
  })
}

// 普通战队建队申请列表
export function commonTeamList(data: any) {
  return request({
    url: '/api/admin/team/applyList',
    method: 'get',
    params: data
  })
}

// 审核战队
export function checkCommonTeam(data: any) {
  return request({
    url: '/api/admin/team/check',
    method: 'post',
    data
  })
}

// 赛事列表
export function competionAllList(data: any) {
  return request({
    url: '/api/admin/match/list',
    method: 'get',
    params: data
  })
}

// 裁判长列表
export function refereeList(data: any) {
  return request({
    url: '/api/admin/match/refereeQualifiedList',
    method: 'get',
    params: data
  })
}

// 新建赛事
export function subNewCompetition(data: any) {
  return request({
    url: '/api/admin/match/create',
    method: 'post',
    data
  })
}

// 新建赛事
export function updateCompetition(data: any) {
  return request({
    url: '/api/admin/match/update',
    method: 'post',
    data
  })
}

// 裁判长列表
export function getCompetitionDetial(data: any) {
  return request({
    url: '/api/admin/match/detail',
    method: 'get',
    params: data
  })
}

// 赛事报名列表
export function competitionApplyList(data: any) {
  return request({
    url: '/api/admin/match/registration/list',
    method: 'get',
    params: data
  })
}

// 赛事报名列表
export function competitionApplyInfo(data: any) {
  return request({
    url: '/api/admin/match/registration/detail',
    method: 'get',
    params: data
  })
}

// 审核报名
export function checkApply(data: any) {
  return request({
    url: '/api/admin/match/registration/check',
    method: 'post',
    data
  })
}

// 取消赛事
export function cancelCompetition(data: any) {
  return request({
    url: '/api/admin/match/cancel',
    method: 'post',
    data
  })
}

// 结束赛事
export function finishCompetition(data: any) {
  return request({
    url: '/api/admin/match/stop',
    method: 'post',
    data
  })
}

// 聊天室公告列表
export function chatRoomNoticeList(data: any) {
  return request({
    url: '/api/admin/match/notice/list',
    method: 'get',
    params: data
  })
}

// 聊天室公告新建
export function newChatRoomNotice(data: any) {
  return request({
    url: '/api/admin/match/notice/create',
    method: 'post',
    data
  })
}

// 聊天室公告修改
export function editChatRoomNotice(data: any) {
  return request({
    url: '/api/admin/match/notice/update',
    method: 'post',
    data
  })
}

// 咨讯列表
export function newsList(data: any) {
  return request({
    url: '/api/admin/match/news/list',
    method: 'get',
    params: data
  })
}

// 咨讯修改
export function saveNews(data: any) {
  return request({
    url: '/api/admin/match/news/save',
    method: 'post',
    data
  })
}

// 咨讯列表
export function getNewsMsg(data: any) {
  return request({
    url: '/api/admin/match/news/detail',
    method: 'get',
    params: data
  })
}

// 查询电话
export function getMobileNumber(data: any) {
  return request({
    url: '/api/admin/member/myInfo',
    method: 'get',
    params: data
  })
}

// 发验证码
export function sendLeaderMsg(data: any) {
  return request({
    url: '/api/admin/member/sendSmsToMe',
    method: 'post',
    data
  })
}

// 校验验证码
export function checkCode(data: any) {
  return request({
    url: '/api/admin/member/checkCurrentTel',
    method: 'get',
    params: data
  })
}

// 转移队长身份
export function transferClubLeader(data: any) {
  return request({
    url: '/api/admin/member/transferRole',
    method: 'post',
    data
  })
}

// 查询询用户（包含所在战队）
export function showUserList(data: any) {
  return request({
    url: '/api/admin/member/queryUsers',
    method: 'get',
    params: data
  })
}

// 修改我的手机号
export function editMyNewMobile(data: any) {
  return request({
    url: '/api/admin/member/modifyMyTel',
    method: 'post',
    data
  })
}

// 查询询用户（包含所在战队）
export function getClubMemberInfo(data: any) {
  return request({
    url: '/api/admin/member/detail',
    method: 'get',
    params: data
  })
}

// 修改社员信息
export function changeMemberMsg(data: any) {
  return request({
    url: '/api/admin/member/update',
    method: 'post',
    data
  })
}

// 更新战队
export function changeTeamMsg(data: any) {
  return request({
    url: '/api/admin/team/update',
    method: 'post',
    data
  })
}

// 提交图片
export function subPicture(data: any) {
  return request({
    url: '/api/admin/club/upload_pic',
    method: 'post',
    data
  })
}

// 移除社员
export function removeMember(data: any) {
  return request({
    url: '/api/admin/member/remove',
    method: 'get',
    params: data
  })
}

// 对阵图
export function playAgainst(matchId: any) {
  return request({
    url: `/api/admin/match/playAgainst?matchId=${matchId}`,
    method: 'get'
  })
}
export function queryAgainstTeams(data: any) {
  return request({
    url: `/api/admin/match/queryAgainstTeams`,
    data,
    method: 'post'
  })
}
export function createAgainst(data: any) {
  return request({
    url: `/api/admin/match/createAgainst`,
    data,
    method: 'post'
  })
}

// 资讯列表
export function getInformationList(data: any) {
  return request({
    url: '/api/admin/news/list',
    method: 'get',
    params: data
  })
}

// 资讯详情
export function getInformationInfo(data: any) {
  return request({
    url: '/api/admin/news/detail',
    method: 'get',
    params: data
  })
}

// 资讯添加
export function addInformation(data: any) {
  return request({
    url: '/api/admin/news/create',
    method: 'post',
    data
  })
}

// 战队认证审核列表
export function getTeamList(data: any) {
  return request({
    url: '/api/admin/teamAuth/apply/list',
    method: 'get',
    params: data
  })
}

// 战队审核
export function checkTeam(data: any) {
  return request({
    url: '/api/admin/teamAuth/apply/update',
    method: 'post',
    data
  })
}

// 战队取消认证
export function teamAuthentication(data: any) {
  return request({
    url: '/api/admin/team/auth/cancel',
    method: 'post',
    data
  })
}

// 社员认证审核列表
export function getMembersList(data: any) {
  return request({
    url: '/api/admin/member/apply/list',
    method: 'get',
    params: data
  })
}

// 社员审核
export function checkMember(data: any) {
  return request({
    url: '/api/admin/member/apply/update',
    method: 'post',
    data
  })
}
