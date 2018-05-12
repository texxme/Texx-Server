<?php
/**
 * UserFrosting (http://www.userfrosting.com)
 *
 * @link      https://github.com/userfrosting/UserFrosting
 * @license   https://github.com/userfrosting/UserFrosting/blob/master/licenses/UserFrosting.md (MIT License)
 */

/**
 * Routes for administrative user management.
 */
$app->group('/users', function () {
    $this->get('', 'UserFrosting\Sprinkle\Admin\Controller\UserController:pageList')
        ->setName('uri_users');

    $this->get('/u/{user_name}', 'UserFrosting\Sprinkle\Admin\Controller\UserController:pageInfo');
})->add('authGuard');

$app->group('/api/users', function () {
    $this->delete('/u/{user_name}', 'UserFrosting\Sprinkle\Admin\Controller\UserController:delete');

    $this->get('', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getList');

    $this->get('/u/{user_name}', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getInfo');

    $this->get('/u/{user_name}/activities', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getActivities');

    $this->get('/u/{user_name}/posts', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getActivities');

    $this->get('/u/{user_name}/roles', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getRoles');

    $this->get('/u/{user_name}/permissions', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getPermissions');

    $this->get('/u/{user_name}/followers', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getFollowers'); // GET USERS WHICH ARE FOLLOWING THE USER

    $this->get('/u/{user_name}/follows', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getFollows'); // GET USERS WHICH THE USER FOLLOWS

    $this->get('/u/{user_name}/publickey', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getPublicKey');

    $this->post('', 'UserFrosting\Sprinkle\Admin\Controller\UserController:create');

    $this->post('/u/{user_name}/password-reset', 'UserFrosting\Sprinkle\Admin\Controller\UserController:createPasswordReset');

    $this->post('/u/{user_name}/publickey', 'UserFrosting\Sprinkle\Admin\Controller\UserController:setPublicKey');

    $this->put('/u/{user_name}', 'UserFrosting\Sprinkle\Admin\Controller\UserController:updateInfo');

    $this->put('/u/{user_name}/{field}', 'UserFrosting\Sprinkle\Admin\Controller\UserController:updateField');
})->add('authGuard');

$app->group('/modals/users', function () {
    $this->get('/confirm-delete', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getModalConfirmDelete');

    $this->get('/create', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getModalCreate');

    $this->get('/edit', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getModalEdit');

    $this->get('/password', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getModalEditPassword');

    $this->get('/roles', 'UserFrosting\Sprinkle\Admin\Controller\UserController:getModalEditRoles');
})->add('authGuard');
